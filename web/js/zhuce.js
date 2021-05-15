function validate() {
    // 获取手机号 手机号验证
    var phone = document.getElementById("phone");
    if (phone.value.length == 11) {} else {
        alert("请输入正确的手机号");
        return false;
    }
    // 获取密码  密码验证
    var passWord = document.getElementById("password");
    var passWord1 = document.getElementById("password1");
    if (passWord.value !== passWord1.value) {
        alert("两次密码不一致")
        return false;
    } else if (passWord.value == '') {
        alert("请输入密码")
        return false;
    } else {}
    alert("恭喜您完成注册")
    return true;



}