document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if(name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    // Simulate form submission (in reality, you'd send this data to a server)
    alert("Message sent successfully!");
    
    // Clear form after submission
    document.getElementById('contact-form').reset();
});
