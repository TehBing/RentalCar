  function openSection(event, sectionId) {
    const tabSections = document.getElementsByClassName("tab-section");
    for (let i = 0; i < tabSections.length; i++) {
      tabSections[i].style.display = "none";
    }
  
    const tabLinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
  
    document.getElementById(sectionId).style.display = "block";
    event.currentTarget.classList.add("active");
  }

//Function for slider
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// Show the first slide on page load
showSlide();


  // Function to display the popup modal
//   function openModal() {
//     const modal = document.getElementById("modal");
//     modal.style.display = "block";
//   }
  
  // Function to close the popup modal
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  // Function to open the sign-in form (You can implement this as needed)
  function openSignInForm() {
    console.log("Open sign-in form");
    // Implement your sign-in form logic here
  }
  
  // Function to open the registration form (You can implement this as needed)
  function openRegisterForm() {
    console.log("Open register form");
    // Implement your registration form logic here
  }
  
  // Add event listener to open the modal when the page is loaded
  document.addEventListener("DOMContentLoaded", function() {
    openModal();
  });