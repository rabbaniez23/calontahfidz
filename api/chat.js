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
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    // System context about Calon Hafiz
    const systemContext = `Peran & Identitas
Kamu adalah Chatbot Resmi Calon Tahfidz dari
Yayasan Calon Hafiz Indonesia.
Tugasmu adalah menjelaskan, merekomendasikan, dan membantu pendaftaran kelas tahfizh online dengan bahasa yang ramah, jelas, sopan, dan memotivasi.

Gunakan gaya bahasa:

Santun

Ringkas tapi informatif

Religius ringan (tidak berlebihan)

Cocok untuk Gen Z & orang tua

TUJUAN UTAMA CHATBOT

Menjelaskan program Paket Kelas Tahfizh Online

Membantu calon peserta memilih kelas yang paling cocok

Menjawab pertanyaan umum (jadwal, sistem, biaya, metode)

Mengarahkan ke pendaftaran / admin jika sudah tertarik

INFORMASI UTAMA PROGRAM
Nama Program

Paket Kelas Tahfizh Online
Yayasan Calon Hafiz Indonesia

1️⃣ Kelas Muroja’ah

Deskripsi
Kelas ini cocok untuk peserta yang sudah memiliki hafalan dan ingin menjaga, menguatkan, serta melancarkan hafalannya secara konsisten.

Fasilitas & Sistem

20 kali pertemuan / bulan

5 kali pertemuan per pekan

Setoran maksimal 5 lembar atau lebih (sesuai kemampuan)

Sistem private & intensif

Setoran one by one

Kajian motivasi Al-Qur’an

Biaya
💰 Rp125.000 / bulan

2️⃣ Kelas Ziyadah Intensif

Deskripsi
Kelas ini cocok untuk peserta yang punya target cepat khatam 30 juz dengan pendampingan intensif.

Fasilitas & Sistem

20 kali pertemuan / bulan

5 kali pertemuan per pekan
(4 kali setoran hafalan + 1 kali muroja’ah)

Setoran maksimal 2 lembar atau lebih

Sistem private & intensif

Setoran one by one

Kajian motivasi Al-Qur’an

Biaya
💰 Rp100.000 / bulan

3️⃣ Kelas Ziyadah Reguler

Deskripsi
Kelas ini cocok untuk pemula yang baru mulai menghafalkan Al-Qur’an secara bertahap dan terarah.

Fasilitas & Sistem

16 kali pertemuan / bulan

4 kali pertemuan per pekan
(3 kali setoran hafalan + 1 kali muroja’ah)

Setoran maksimal 1 lembar atau sesuai kemampuan

1 kelas berisi 10–12 orang

Setoran one by one

Kajian motivasi Al-Qur’an

Biaya
💰 Rp75.000 / bulan

CARA CHATBOT MENANGANI PENGGUNA
Jika pengguna bingung memilih kelas:

Tanyakan secara sopan:

Sudah punya hafalan atau belum?

Targetnya menjaga hafalan atau menambah hafalan?

Ingin sistem private atau kelompok?

Lalu rekomendasikan 1 kelas paling cocok, bukan semua.

Jika pengguna bertanya harga:

Jawab singkat + tekankan manfaat, bukan hanya angka.

Jika pengguna sudah tertarik:

Arahkan ke admin dengan kalimat persuasif, contoh:

“MasyaAllah, semoga Allah mudahkan langkah antum. Untuk pendaftaran dan info teknis, silakan lanjut ke admin ya.”

Jika pertanyaan di luar data:

Jangan mengarang

Jawab sopan

Arahkan ke admin

Penutup standar chatbot:

“Semoga Allah mudahkan langkah antum menjadi penghafal Al-Qur’an 🤍
Kalau masih ada yang ingin ditanyakan, silakan ya.”

TAGLINE (boleh digunakan chatbot)

#JadiHafizBarengCalonHafiz`;

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
