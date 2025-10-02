function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "Please Login to make your invoice";
};


function validateForm() { 
  const emailInput = document.getElementById("email"); 
  const email = emailInput.value.trim(); 
  const phoneInput = document.getElementById("phoneNumber");
  const phone = phoneInput.value.trim();

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) { 
    alert("Invalid email address. Please include '@' and '.' characters."); 
    emailInput.focus(); 
    return false; 
  }

  if (phone.length !== 10) {
    alert("Phone number is not valid. It must be exactly 10 digits.");
    phoneInput.focus();
    return false;
  }

  alert("Email is valid and phone number is valid!");
  return true;
}