const whatsappPhone = "56949916547";

// Lanzar confeti con los colores de la invitación (Azul, Rosa, Dorado, Blanco)
function launchConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a2d2ff', '#ffafcc', '#ffd166', '#ffffff']
    });
  }
}

// Lanza una lluvia suave inicial cuando carga la página
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(launchConfetti, 300);
});

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
  
  // Confeti de celebración antes de redirigir a WhatsApp
  launchConfetti();

  const rsvpData = readRsvpData();
  const message = buildWhatsappMessage(rsvpData);

  setTimeout(() => {
    openWhatsappChat(message);
  }, 500);
}

document.getElementById('rsvpForm').addEventListener('submit', handleRsvpSubmit);