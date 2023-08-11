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
  function openModal() {
    const modal = document.getElementById("user-modal");
    modal.style.display = "block";
  }
  
  // Function to close the popup modal
  function closeModal() {
    const modal = document.getElementById("user-modal");
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

// Function to display the booking form modal
  function showBookingForm() {
    const modal = document.getElementById("bookingModal");
    modal.style.display = "block";
  }


// // Function to handle form submission
// document.getElementById("bookingForm").addEventListener("submit", function (event) {
//   event.preventDefault();
//   // Add your form submission logic here
//   // For example, you can collect form data and perform further actions
// });

// function showStep2() {
//   // Hide Step 1 and show Step 2
//   document.getElementById('step1').style.display = 'none';
//   document.getElementById('step2').style.display = 'block';
// }

let currentStep = 1;
let modal = document.getElementById('bookingModal');

function showStep(step) {
  document.getElementById('step' + currentStep).style.display = 'none';
  currentStep = step;
  document.getElementById('step' + currentStep).style.display = 'block';

  // Step 4: Update the review content with the booking summary
  if (currentStep === 4) {
    reviewstep();
  }
}

function reviewstep(){
 // Retrieve data from each step and create a summary
 const rentDate = document.getElementById('rent-date').value;
 const collectionAddress = document.getElementById('collection-address').value;
 const returnDate = document.getElementById('return-date').value;
 const returnAddress = document.getElementById('return-address').value;
 const name = document.getElementById('name').value;
 const phone = document.getElementById('phone').value;
 const email = document.getElementById('email').value;
 const creditCard = document.getElementById('credit-card').value;
 const expiryDate = document.getElementById('expiry-date').value;
 const csv = document.getElementById('csv').value;

 // You can display a summary of the booking details
 const summary = `
  <h3>Step 4: Review Booking</h3>
  <!-- ... Display a summary of the booking details here ... -->
   <p><b>Date to Rent is from</b> ${rentDate} <b>to</b> ${returnDate}</p>
   <p><b>Collection Address:</b> ${collectionAddress}</p>
   <p><b>Return Address:</b> ${returnAddress}</p>
   <p><b>Name:</b> ${name}</p>
   <p><b>Phone:</b> ${phone}</p>
   <p><b>Email:</b> ${email}</p>
   <p><b>Credit Card Number:</b> ${creditCard}</p>
   <p><b>Expiry Date:</b> ${expiryDate}</p>
   <p><b>CSV:</b> ${csv}</p>
   <P><b>Total Bill will be: $927</b><p>
 `;

// Display the booking summary in the review page
document.getElementById('bookingSummary').innerHTML = summary;
 // Move to Step 4 (Review Booking)
 showStep(4);

}

function submitBooking() {
    alert('Booking Successful, Invoice has been send to your email!');
    closeBookingForm();
}

function closeBookingForm() {
  currentStep = 1;
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step4').style.display = 'none';
  document.getElementById('bookingModal').style.display = 'none';
  showStep(1);
}
