/**
 * Created by zxh_s on 2017/7/11.
 */
var infoName = document.getElementById("info-name");
var nameTip = document.getElementById("name-tip");
var infoPassword = document.getElementById("info-password");
var passwordTip = document.getElementById("password-tip");
var confirmPassword = document.getElementById("confirm-password");
var cPasswordTip = document.getElementById("confirmPassword");
var infoEmail = document.getElementById("info-email");
var emailTip = document.getElementById("email");
var infoTel = document.getElementById("info-tel");
var telTip = document.getElementById("tel");
var btn = $("btn-search");

function nameTips() {
    infoName.style.border ="2px solid #2F79BA";
    nameTip.innerHTML="必填，长度为4~16个字符";
    nameTip.style.color = "#999";
}
infoName.addEventListener("click",nameTips);

function passwordTips() {
    infoPassword.style.border ="2px solid #2F79BA";
    passwordTip.innerHTML="密码和数字结合，长度6~20个字符";
    passwordTip.style.color = "#999";
}
infoPassword.addEventListener("click",passwordTips);

function confirmPasswordTips() {
    confirmPassword.style.border ="2px solid #2F79BA";
    cPasswordTip.innerHTML="再次输入相同的密码";
    cPasswordTip.style.color = "#999";
}
confirmPassword.addEventListener("click",confirmPasswordTips);

function emailTips() {
    infoEmail.style.border ="2px solid #2F79BA";
    emailTip.innerHTML="请输入邮箱地址";
    emailTip.style.color = "#999";
}
infoEmail.addEventListener("click",emailTips);

function telTips(){
    infoTel.style.border ="2px solid #2F79BA";
    telTip.innerHTML="	请输入11位手机号码";
    telTip.style.color = "#999";
}
infoTel.addEventListener("click",telTips);

function $(id_selector) {
    return document.getElementById(id_selector);//document.getElementById(id_selector.substring(1, id_selector.length));
}

function checkNameBlur() {
    var len = infoName.value.length;
    if(len<1){
        infoName.style.border ="2px solid #df0110";
        nameTip.innerHTML="名称不能为空";
        nameTip.style.color = "#df0110";
        return false;
    }
    else if(len<4||len>16){
        infoName.style.border ="2px solid #df0110";
        nameTip.innerHTML="长度为4-16个字符";
        nameTip.style.color = "#df0110";
        return false;
    }
    else {
        infoName.style.border ="2px solid #60bb44";
        nameTip.innerHTML="名称可用";
        nameTip.style.color = "#60bb44";
        return true;
    }
}

function checkPasswordBlur() {
    var len = infoPassword.value.length;
    if (len<1){
        infoPassword.style.border ="2px solid #df0110";
        passwordTip.innerHTML="密码不能为空";
        passwordTip.style.color = "#df0110";
        return false;
    }
    else if(len<4||len>16){
        infoPassword.style.border ="2px solid #df0110";
        passwordTip.innerHTML="长度为4-16个字符";
        passwordTip.style.color = "#df0110";
        return false;
    }
    else {
        infoPassword.style.border ="2px solid #60bb44";
        passwordTip.innerHTML="密码可用";
        passwordTip.style.color = "#60bb44";
        return true;
    }
}

function checkConfirmPasswordBlur() {
    var len = confirmPassword.value.length;
    if (len<1){
        confirmPassword.style.border ="2px solid #df0110";
        cPasswordTip.innerHTML="密码不能为空";
        cPasswordTip.style.color = "#df0110";
        return false;
    }
    else if(len<4||len>16){
        confirmPassword.style.border ="2px solid #df0110";
        cPasswordTip.innerHTML="长度为4-16个字符";
        cPasswordTip.style.color = "#df0110";
        return false;
    }
    if(infoPassword.value!=confirmPassword.value){
        confirmPassword.style.border ="2px solid #df0110";
        cPasswordTip.innerHTML="两次输入密码不一致";
        cPasswordTip.style.color = "#df0110";
        return false;
    }
    else {
        confirmPassword.style.border ="2px solid #60bb44";
        cPasswordTip.innerHTML="密码可用";
        cPasswordTip.style.color = "#60bb44";
        return true;
    }
}

function checkEmailBlur() {
    var len = infoEmail.value.length;
    var email = infoEmail.value;
    var apos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if(len<1){
        infoEmail.style.border ="2px solid #df0110";
        emailTip.innerHTML="邮箱不能为空";
        emailTip.style.color = "#df0110";
        return false;
    }
    else if (apos<1||dotpos-apos<2){
        infoEmail.style.border ="2px solid #df0110";
        emailTip.innerHTML="邮箱格式错误";
        emailTip.style.color = "#df0110";
        return false;
    }
    else{
        infoEmail.style.border ="2px solid #60bb44";
        emailTip.innerHTML="邮箱可用";
        emailTip.style.color = "#60bb44";
        return true;
    }
}

function checkTelBlur() {
    var len = infoTel.value.length;

    var boolReg = !infoTel.value.match("/^(1)\d/");
    if(len<1){
        infoTel.style.border ="2px solid #df0110";
        telTip.innerHTML="手机号码不能为空";
        telTip.style.color = "#df0110";
        return false;
    }
    else if(len!= 11||!boolReg){
        infoTel.style.border ="2px solid #df0110";
        telTip.innerHTML="手机号码格式错误";
        telTip.style.color = "#df0110";
        return false;
    }
    else {
        infoTel.style.border ="2px solid #60bb44";
        telTip.innerHTML="手机号可用";
        telTip.style.color = "#60bb44";
        return true;
    }
}

function checkAll() {
    checkNameBlur();
    checkPasswordBlur();
    checkConfirmPasswordBlur();
    checkEmailBlur();
    checkTelBlur();
}
btn.addEventListener("click",checkAll);