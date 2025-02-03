document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".cart-icon").addEventListener("click", () => {
        alert("Cart is currently empty!");
    });

    document.querySelector(".login-btn").addEventListener("click", () => {
        alert("Redirecting to login page...");
    });

    document.querySelector(".register-btn").addEventListener("click", () => {
        alert("Registration page coming soon!");
    });

    document.querySelector(".bell-icon").addEventListener("click", () => {
        alert("No new notifications!");
    });
});
