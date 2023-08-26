document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const packageCards = document.getElementsByClassName('package-card');
  
    searchInput.addEventListener('input', function () {
      const query = searchInput.value.toLowerCase();
  
      for (const packageCard of packageCards) {
        const packageName = packageCard.querySelector('h2').textContent.toLowerCase();
        const packageDescription = packageCard.querySelector('p').textContent.toLowerCase();
        const isMatch = packageName.includes(query) || packageDescription.includes(query);
  
        packageCard.style.display = isMatch ? 'block' : 'none';
      }
    });
  });

//   JavaScript Code to Handle Form Submission
  document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-form');
  
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const packageInput = document.getElementById('package');
  
      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        package: packageInput.value
      };
  
      // Replace the alert with your own logic to process the form data
      alert('Booking submitted!\n\n' + JSON.stringify(formData));
    });
  });



