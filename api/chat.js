import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Check if API key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set");
      return res.status(500).json({
        error: "API key not configured",
        message: "Please set GEMINI_API_KEY in Vercel environment variables",
      });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // Use valid model name - gemini-1.5-flash is faster and available
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // System context about Calon Hafiz
    const systemContext = `Kamu adalah asisten virtual dari Calon Hafiz Indonesia, platform tahfizh Al-Qur'an online terpercaya.

Informasi penting:
- Calon Hafiz adalah platform belajar mengaji dan menghafal Al-Qur'an online
- Lokasi: Jalan Adi Sucipto No 11-12, Mataram, NTB 83118
- Kontak: 085339915411, halo@calontahfidz.com
- Program: Tahfizh Basic, Intermediate, Intensif, Tahsin & Tajwid, Kelas Anak-anak
- Metode: One-on-one video call via WhatsApp dengan ustadz berpengalaman
- Keunggulan: Waktu fleksibel, pengajar lulusan pesantren, E-Sertifikat
- Visi: Menjadi lembaga tahfizh online terdepan di Indonesia
- Target: 500+ santri aktif, 50+ pengajar hafizh

Jawab dengan ramah, informatif, dan Islami. Gunakan Bahasa Indonesia yang sopan.
Jika ditanya hal di luar topik Calon Hafiz, arahkan kembali ke layanan kami.`;

    // Build conversation history
    let conversationHistory = systemContext + "\n\n";

    if (history && history.length > 0) {
      history.forEach((msg) => {
        conversationHistory += `${
          msg.role === "user" ? "User" : "Assistant"
        }: ${msg.content}\n`;
      });
    }

    conversationHistory += `User: ${message}\nAssistant:`;

    console.log("Sending request to Gemini...");

    // Generate response
    const result = await model.generateContent(conversationHistory);
    const response = await result.response;
    const text = response.text();

    console.log("Response received from Gemini");

    return res.status(200).json({
      response: text,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    // Better error messages
    let errorMessage = "Failed to generate response";

    if (error.message.includes("API_KEY")) {
      errorMessage =
        "Invalid API key. Please check your Gemini API key in Vercel settings.";
    } else if (error.message.includes("quota")) {
      errorMessage = "API quota exceeded. Please try again later.";
    } else if (error.message.includes("model")) {
      errorMessage = "Invalid model specified. Using gemini-1.5-flash.";
    }

    return res.status(500).json({
      error: errorMessage,
      details: error.message,
      timestamp: new Date().toISOString(),
    });
  }
}

// Configure for Vercel serverless
export const config = {
  runtime: "nodejs",
  maxDuration: 30,
};
