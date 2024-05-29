document.getElementById("registerButton").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Form validation
    if (name.trim() === "") {
        alert("Please enter your full name.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phone.trim() === "") {
        alert("Please enter your phone number.");
        return;
    }

    // Construct the URL with form data
    var url = "registration.html?" + "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone);
    
    // Redirect to the constructed URL
    window.location.href = url;
});