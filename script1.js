document.addEventListener("DOMContentLoaded", function () {
    const xpValue = document.getElementById("xp-value");
    const xpFill = document.getElementById("xp-fill");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Update XP Bar dynamically
    function updateXP(newXP) {
        let maxXP = 500;  // Change max XP as needed
        let percentage = (newXP / maxXP) * 100;
        xpValue.textContent = newXP;
        xpFill.style.width = percentage + "%";
    }

    // Simulate XP Gain
    //setTimeout(() => updateXP(100), 2000); // Example: Gain XP after 2 seconds

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
