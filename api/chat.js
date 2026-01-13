import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

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

    // Generate response
    const result = await model.generateContent(conversationHistory);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({
      response: text,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return res.status(500).json({
      error: "Failed to generate response",
      message: error.message,
    });
  }
}

// Configure for Vercel serverless
export const config = {
  runtime: "nodejs",
  maxDuration: 30, // 30 seconds timeout
};
