const movieSignup = document.getElementById("movie-signup")

function storeEmail(e) {
    e.preventDefault()
    inputEmail = document.getElementById("email");
localStorage.setItem("email", inputEmail.value); 
alert("Thanks for signing up. We have your email address stored as "+ inputEmail.value + "!")
$("[data-dismiss=modal]").trigger({ type: "click" });
}

function loadEmail() {
    
    var savedEmail = localStorage.getItem("email") || ""
    $("#email").val(savedEmail)
}
movieSignup.addEventListener("submit", storeEmail);
loadEmail()