let password2input = document.getElementById('pass_conf');
let password1input = document.getElementById('pass');
let btn = document.getElementById('submit');
let errorMsg = document.querySelector('.pass-conf-msg');
const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword2");

function ValidateMyForm(event) {
    
    let password = document.getElementById('pass').value;
    let passwordConfirm = document.getElementById('pass_conf').value;
    
    if (password!=passwordConfirm) {    
        event.preventDefault();
        password2input.style.border= '2px solid red';
        errorMsg.innerHTML="Passwords do not match";
    }
    
    else {
        password2input.style.border='2px solid green';
        return true;
    }
}


togglePassword.addEventListener("click", function () {
            const type = password1input.getAttribute("type") === "password" ? "text" : "password";
            password1input.setAttribute("type", type);
            this.classList.toggle("bi-eye");
        });


togglePassword2.addEventListener("click", function () {
            const type = password2input.getAttribute("type") === "password" ? "text" : "password";
            password2input.setAttribute("type", type);
            this.classList.toggle("bi-eye");
        });


