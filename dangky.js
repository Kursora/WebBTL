var check_email = /^\w+@\w{3,}\.com$/;
function checkEmpty() 
{
    const inputName = document.getElementById("name");
    const nameValue = inputName.value;
    const inputEmail = document.getElementById("reg_email");
    const emailValue = inputEmail.value;
    const inputPassword= document.getElementById("reg_password");
    const passwordValue = inputPassword.value;
    const confirmValue=document.getElementById("confirm_password");
    const CV=confirmValue.value;
    if(nameValue=="")
    {
        document.getElementById("errorcheck").innerText="Bạn chưa nhập tên";
        return;
    }
    if(emailValue=="") 
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
    if(CV!=passwordValue)
    {
        document.getElementById("errorcheck").innerText="Xác nhận mật khẩu sai";
        return;
    }
    if(document.getElementById("dongy").checked==false)
    {
        document.getElementById("errorcheck").innerText="Xin hãy đồng ý với Điều khoản và dịch vụ";
        return;
    }
    document.getElementById("errorcheck").innerText="";
    alert("Đăng ký thành công");
}