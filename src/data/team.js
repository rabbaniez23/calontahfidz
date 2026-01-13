/**
 * TEAM MEMBERS DATA
 * Replace with actual team information
 */

import { images } from "./images";

export const teamMembers = [
  {
    id: 1,
    name: "Ustadz Ahmad Muhajir, Lc.",
    photo: images.team[0], // REPLACE with actual photo
    role: "Founder & Head Teacher",
    education: "Lulusan Universitas Al-Azhar, Kairo",
    bio: "Berpengalaman mengajar tahfizh selama 15 tahun dengan ratusan alumni hafizh. Spesialis metode tahfizh intensif dan muroja'ah.",
  },
  {
    id: 2,
    name: "Ustadzah Siti Khadijah, S.Pd.I",
    photo: images.team[1], // REPLACE with actual photo
    role: "Senior Teacher",
    education: "Lulusan Pondok Pesantren Modern & UIN Jakarta",
    bio: "Teacher favorit dengan pendekatan yang sabar dan sistematis. Khusus membimbing santri pemula dengan metode yang fun dan efektif.",
  },
  {
    id: 3,
    name: "Ustadz Muhammad Fadli, S.Q",
    photo: images.team[2], // REPLACE with actual photo
    role: "Head of Curriculum",
    education: "Lulusan LIPIA Jakarta & Ma'had Tahfizh",
    bio: "Ahli penyusunan kurikulum tahfizh dengan pendekatan modern. Fokus pada efektivitas hafalan jangka panjang.",
  },
  {
    id: 4,
    name: "Ustadzah Fatimah Az-Zahra, Lc.",
    photo: images.team[3], // REPLACE with actual photo
    role: "Quality Assurance",
    education: "Lulusan Universitas Islam Madinah",
    bio: "Pengawas kualitas pengajaran dengan standar internasional. Memastikan setiap santri mendapat bimbingan terbaik.",
  },
];

export const visiMisi = {
  visi: "Menjadi lembaga tahfizh online terdepan di Indonesia yang melahirkan generasi penghafal Al-Qur'an berkualitas dan berakhlak mulia.",
  misi: [
    "Menyediakan pembelajaran tahfizh online yang berkualitas dan mudah diakses oleh semua kalangan",
    "Membimbing santri dengan metode yang terbukti efektif dan menyenangkan",
    "Membangun komunitas penghafal Al-Qur'an yang kuat dan saling mendukung",
    "Menghasilkan hafizh dan hafizhah yang tidak hanya kuat hafalannya, tapi juga berakhlak mulia",
  ],
};

export const coreValues = [
  {
    id: 1,
    title: "Integritas",
    description:
      "Berkomitmen pada kejujuran, transparansi, dan etika Islam dalam setiap aspek pembelajaran",
    icon: "integrity", // Will use Flowbite icon
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "Memberikan kualitas terbaik dalam pengajaran dengan standar internasional",
    icon: "excellence",
  },
  {
    id: 3,
    title: "Komitmen",
    description:
      "Dedikasi penuh dalam membimbing setiap santri mencapai target hafalannya",
    icon: "commitment",
  },
  {
    id: 4,
    title: "Kasih Sayang",
    description:
      "Mendidik dengan penuh kelembutan dan kesabaran sebagaimana Rasulullah SAW",
    icon: "compassion",
  },
];

export const achievements = [
  {
    year: "2020",
    title: "Didirikan",
    description:
      "Yayasan Calon Hafiz Indonesia resmi berdiri dengan visi melahirkan generasi penghafal Al-Qur'an",
  },
  {
    year: "2021",
    title: "100+ Santri",
    description:
      "Mencapai milestone 100 santri aktif dari berbagai kota di Indonesia",
  },
  {
    year: "2022",
    title: "50 Alumni Hafizh",
    description: "Melahirkan 50 alumni yang telah menyelesaikan hafalan 30 juz",
  },
  {
    year: "2023",
    title: "Award Tahfizh Terbaik",
    description:
      "Mendapat penghargaan sebagai program tahfizh online terbaik se-Indonesia",
  },
  {
    year: "2024",
    title: "500+ Santri Aktif",
    description: "Kini dipercaya oleh 500+ santri dari seluruh Indonesia",
  },
];

export default {
  teamMembers,
  visiMisi,
  coreValues,
  achievements,
};
