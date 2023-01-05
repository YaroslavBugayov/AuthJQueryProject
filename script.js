$(document).ready(function() {
    $("#sign-in-button").click(function(event) {
        const login = $("#login").val()
        const password = $("#password").val()
        let xhr = new XMLHttpRequest();
        let ulr = "http://127.0.0.1:8080/login"
        xhr.open("POST", ulr)
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({"login": login, "password": password}))
        xhr.onload = function() {
            alert(xhr.response)
        }
        xhr.onerror = function(err) {
            alert(err)
        }
    })
})
