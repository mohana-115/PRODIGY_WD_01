// JavaScript for form validation and confirmation message
document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Simple validation (e.g., all fields are filled)
    if (!name || !email || !phone || !date || !time || !guests) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Show confirmation message
    alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed. We will contact you shortly.`);
    
    // Reset the form
    event.target.reset();
});
