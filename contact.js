// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form default submission
    alert('Message Sent!'); // Show the alert
    this.reset(); // Reset the form fields
});
