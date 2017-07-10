/**
 * Created by zxh_s on 2017/7/10.
 */
var info = document.getElementById("info-name");
var btnSearch = document.getElementById("btn-search");
var nameTip = document.getElementById("name-tips");

function check() {
    if(!info.value){
        info.style.border ="2px solid #DD0001";
        nameTip.innerHTML="姓名不能为空";
        nameTip.style.color = "#DD0001";
    }
    else {
        info.style.border ="2px solid #58B93E";
        nameTip.innerHTML="名称格式正确";
        nameTip.style.color = "#58B93E";
    }
}
function light() {
    info.style.border ="2px solid #2F79BA";
    nameTip.innerHTML="必填，长度为4~16个字符";
    nameTip.style.color = "#2F79BA";
}
function recover() {
    info.style.border ="2px solid #c9c9c9";
    nameTip.innerHTML="必填，长度为4~16个字符";
    nameTip.style.color = "#c9c9c9";
}
btnSearch.addEventListener("click",check);
