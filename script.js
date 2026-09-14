document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  const formStatus = document.getElementById('formStatus');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect field data
      const name = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('eventDate').value;
      const eventType = document.getElementById('eventType').value;

      // Status confirmation display (can be hooked up to EmailJS or Formspree)
      formStatus.style.color = '#d4af37';
      formStatus.textContent = `Thank you, ${name}! Your inquiry for ${date} has been sent. Chef Sherry will reach out shortly.`;

      bookingForm.reset();
    });
  }

  // Navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
});
