document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("google-login").addEventListener("click", function() {
        // Google login logic here
        console.log("Google login clicked");
    });

    document.getElementById("facebook-login").addEventListener("click", function() {
        // Facebook login logic here
        console.log("Facebook login clicked");
    });

    document.getElementById("instagram-login").addEventListener("click", function() {
        // Instagram login logic here
        console.log("Instagram login clicked");
    });

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Form submission logic here
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log("Email:", email, "Password:", password);
    });
});
