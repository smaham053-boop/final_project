$(document).ready(function () {
    function fadeInTextOnScroll() {
        $("h1, h2, h3, p").each(function () {
            let position = $(this).offset().top;
            let screenPosition = $(window).scrollTop() + $(window).height() - 50; // Adjusted

            if (position < screenPosition) {
                $(this).addClass("visible");
            }
        });
    }

    $(window).on("scroll", fadeInTextOnScroll);
    fadeInTextOnScroll(); // Run once to check initial visibility
});



document.getElementById("contactForm").addEventListener("submit",function(event){
    event.preventDefault()
let firstName= document.getElementById("firstName").value.trim()
let lastName= document.getElementById("lastName").value.trim()
let email=document.getElementById("email").value.trim()
let message=document.getElementById("message").value.trim()

document.getElementById("firstNameError").textContent=""
document.getElementById("lastNameError").textContent=""
document.getElementById("emailError").textContent=""

let isvalid=true
let usernamePattern= /^[A-Za-z]+$/;
if(firstName === ""){
    document.getElementById("firstNameError").innerText= "First Name is Required"
    isvalid=false
}
else if(!usernamePattern.test(firstName)){
    document.getElementById("firstNameError").textContent="Invalid First Name Format"
    isvalid=false
}
if(lastName === ""){
    document.getElementById("lastNameError").innerText= "Last Name is Required"
    isvalid=false
}
else if(!usernamePattern.test(lastName)){
    document.getElementById("lastNameError").textContent="Invalid Last Name Format"
    isvalid=false
}
let emailPattern= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
if(email === ""){
    document.getElementById("emailError").textContent="Email is Required"
    isvalid=false
}
else if(!emailPattern.test(email)){
    document.getElementById("emailError").textContent="Invalid email Format"
    isvalid=false
}
if(isvalid){
    alert("form Submitted")
    document.getElementById("contactForm").reset()
}
})

