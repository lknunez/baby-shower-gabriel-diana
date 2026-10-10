const whatsappPhone = "56949916547";

function readRsvpData() {
  return {
    name: document.getElementById('name').value.trim(),
    status: document.getElementById('status').value,
    guests: Number(document.getElementById('guests').value),
  };
}

function formatGuestCount(guests) {
  if (guests === 0) {
    return 'Iré sin acompañantes.';
  }
  return `Voy con ${guests} acompañante${guests === 1 ? '' : 's'}.`;
}

function buildWhatsappMessage({ name, status, guests }) {
  return `¡Hola! Soy *${name}*.\n\n¡Qué alegría celebrar la llegada de *Gabriel* y *Diana*!\n${status}\n\n${formatGuestCount(guests)}`;
}

function openWhatsappChat(message) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

function handleRsvpSubmit(event) {
  event.preventDefault();
  const rsvpData = readRsvpData();
  const message = buildWhatsappMessage(rsvpData);
  openWhatsappChat(message);
}

document.getElementById('rsvpForm').addEventListener('submit', handleRsvpSubmit);