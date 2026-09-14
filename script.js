document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  const formStatus = document.getElementById('formStatus');

  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = bookingForm.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      const formData = new FormData(bookingForm);

      try {
        const response = await fetch(bookingForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          const name = document.getElementById('fullName').value;
          const date = document.getElementById('eventDate').value;

          formStatus.style.color = '#d8b874';
          formStatus.textContent = `Thank you, ${name}! Your inquiry for ${date} has been sent. Chef Sherry will reach out shortly.`;
          bookingForm.reset();
        } else {
          formStatus.style.color = '#e57373';
          formStatus.textContent = 'Oops! There was a problem sending your inquiry. Please try again.';
        }
      } catch (error) {
        formStatus.style.color = '#e57373';
        formStatus.textContent = 'Network error. Please try again or reach out directly.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Inquiry';
      }
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
