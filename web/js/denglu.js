function validate() {
    // 获取手机号 手机号验证
    var phone = document.getElementById("phone");
    if (phone.value.length == 11) {} else {
        alert("请输入正确的手机号");
        return false;
    }
    // 获取密码  密码验证
    var passWord = document.getElementById("password");
    if (passWord.value == '') {
        alert("请输入密码")
        return false;
    } else {}
    alert("恭喜您完成登录")
    return true;



}