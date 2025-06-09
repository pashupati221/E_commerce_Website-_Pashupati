document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("google-signup").addEventListener("click", function() {
        // Google signup logic here
        console.log("Google signup clicked");
    });

    document.getElementById("facebook-signup").addEventListener("click", function() {
        // Facebook signup logic here
        console.log("Facebook signup clicked");
    });

    document.getElementById("instagram-signup").addEventListener("click", function() {
        // Instagram signup logic here
        console.log("Instagram signup clicked");
    });

    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Form submission logic here
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log("Name:", name, "Email:", email, "Password:", password);
    });
});
