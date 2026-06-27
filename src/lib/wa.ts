export const WHATSAPP_LINK = "https://wa.link/reddyanna_";

export const openWhatsApp = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
};
