const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Retrieve form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const testimonial = document.getElementById('testimonial').value;

  // Perform validation and data processing as needed

  // Clear form

 fields
  form.reset();

  // Display a success message or perform any desired actions
  alert('Thank you for sharing your experience!');
});