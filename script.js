document.getElementById("start-btn").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    if (username.trim()=== "") {
        alert("Please enter your name to start!");
    } else {
        localStorage.setItem("pocketHeroUser", username);
        window.location.href = "index1.html";  // Redirect to main app
    }
});
