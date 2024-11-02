function toggleMenu() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('show');
  }
function validateEmail() {
    var email=document.getElementById('email').value
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        alert("dang ky thanh cong");
    } else {
       alert("email chua hop le vui long nhap lai");
    }
}

