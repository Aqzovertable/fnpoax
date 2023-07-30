document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        document.getElementById("message").textContent = "Успешная авторизация!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Неверное имя пользователя или пароль.";
        document.getElementById("message").style.color = "red";
    }
});