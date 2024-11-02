var check_email = /^\w+@\w{3,}\.com$/; 
function checkEmpty() 
{
    const inputEmail = document.getElementById("email");
    const emailValue = inputEmail.value;
    const inputPassword= document.getElementById("password");
    const passwordValue = inputPassword.value;
    if (emailValue=="") 
    {
        document.getElementById("errorcheck").innerText="Bạn chưa nhập Email";
        return;
    }
    if(check_email.test(emailValue)==false)
    {
        document.getElementById("errorcheck").innerText="Email không hợp lệ";
        return;
    }
    if(passwordValue=="")
    {
        document.getElementById("errorcheck").innerText="Bạn chưa nhập mật khẩu";
        return;
    }
    document.getElementById("errorcheck").innerText="";
    return;
}