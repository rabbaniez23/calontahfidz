/**
 * WhatsApp Integration Utility
 *
 * WhatsApp Number: +62 813-7391-4610
 * Formatted for links: 6281373914610
 */

const WHATSAPP_NUMBER = "6281373914610"; // +62 813-7391-4610

/**
 * Generate WhatsApp link with pre-filled message for class registration
 * @param {string} className - Type of class (muroja'ah, intensif, reguler)
 * @returns {string} WhatsApp link with encoded message
 */
export const generateWhatsAppLink = (className) => {
  const messages = {
    "muroja'ah":
      "Assalamualaikum, saya ingin mendaftar Kelas Muroja'ah. Mohon info selengkapnya.",
    intensif:
      "Assalamualaikum, saya ingin mendaftar Kelas Ziyadah Intensif. Mohon info selengkapnya.",
    reguler:
      "Assalamualaikum, saya ingin mendaftar Kelas Ziyadah Reguler. Mohon info selengkapnya.",
    default:
      "Assalamualaikum, saya ingin mendaftar kelas tahfizh. Mohon info selengkapnya.",
  };

  const message = messages[className] || messages.default;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Get direct WhatsApp contact link (for floating button and general contact)
 * @returns {string} Direct WhatsApp link
 */
export const getWhatsAppContactLink = () => {
  const message =
    "Assalamualaikum, saya ingin bertanya tentang program tahfizh Calon Tahfidz Indonesia.";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Get formatted WhatsApp number for display
 * @returns {string} Formatted phone number
 */
export const getFormattedWhatsAppNumber = () => {
  return "+62 813-7391-4610";
};

/**
 * Open WhatsApp link in new tab
 * @param {string} className - Type of class
 */
export const openWhatsApp = (className = "default") => {
  const link = generateWhatsAppLink(className);
  window.open(link, "_blank");
};

export default {
  generateWhatsAppLink,
  getWhatsAppContactLink,
  getFormattedWhatsAppNumber,
  openWhatsApp,
  WHATSAPP_NUMBER,
};
