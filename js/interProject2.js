function validate() {
    let userValidated = validateUsername();
    let passwordValidated = validatePassword();
    let emailValidated = validateEmail();
    let phoneValidated = validatePhoneNumber();
    return userValidated && passwordValidated;
  }

  function validateUsername() {
    var user = document.getElementById("user").value;
    var validated = true;
    var errorMessage = "";
    if (typeof user == undefined || !user) {
      errorMessage = " ** Please enter a username.";
      validated = false;
    }
    if (user.length < 2 || user.length > 20) {
      errorMessage = " ** The username must be between 2 and 20 characters.";
      validated = false;
    }
    document.getElementById("usernameWarning").innerHTML = errorMessage;
    return validated;
  }

  function validatePassword() {
    var password = document.getElementById("password").value;
    var validated = true;
    var errorMessage = "";
    if (password == "") {
      errorMessage = " ** Please enter a password.";
      validated = false;
    }
    if (user.length < 2 || user.length > 20) {
      errorMessage = " ** The password must be between 2 and 20 characters.";
      validated = false;
    }
    document.getElementById("passwordWarning").innerHTML = errorMessage;
    return validated;
  }

  function validateEmail() {
    var email = document.getElementById("email").value;
    var validated = true;
    var errorMessage = "";
    if (email == "") {
      errorMessage = " ** Please enter an email.";
      validated = false;
    }
    if (email.indexOf("@") <= 0 || (email.charAt(email.length - 4) != '.' && email.charAt(email.length - 3) != '.')) {
      errorMessage = " ** The email entered is invalid.";
      validated = false;
    }
    document.getElementById("emailWarning").innerHTML = errorMessage;
    return validated;
  }

  function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phone").value;
    var errorMessage = "";
    var validated = false;
    var validatedReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(phoneNumber);
    if (!validatedReg) {
      document.getElementById("phoneWarning").innerHTML = " ** Please Enter a valid phone number";
    } else {
      document.getElementById("phoneWarning").innerHTML = "";
    }
    if (!phoneNumber) {
        errorMessage = " ** Please Enter a phone number."
        validated = false;
    }
    else {
        validate = validatedReg;
    }
    document.getElementById("phoneWarning").innerHTML = errorMessage;
    return validated;
  }