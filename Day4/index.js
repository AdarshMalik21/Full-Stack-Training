const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("#navMenu");

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("show");
})

const form = document.getElementById("myform");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

  
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");

  
  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";

  
  if (name.value.trim() === "") {
    nameError.innerText = "Name is required";
    isValid = false;
  }

  
  

  
  if (phone.value.length !== 10) {
    phoneError.innerText = "Phone must be 10 digits";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully ");
    form.reset();
  }
});

