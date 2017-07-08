/**
 * Created by zxh_s on 2017/7/8.
 */
var num = document.getElementById('num');
var leftIn = document.getElementById("left-in");
var rightIn = document.getElementById("right-in");
var leftOut = document.getElementById("left-out");
var rightOut = document.getElementById("right-out");
var numBox = document.getElementById("num-box");

function insertNumBefore(){
    if(num.value==""){
        alert("请输入一个数字");
    }else if(!isNaN(num.value)){
        var addLi=document.createElement('li');
        addLi.innerHTML=num.value;
        numBox.insertBefore(addLi,numBox.firstChild);
        num.value="";
    }else{
        alert("格式不对，请您重新输入一个数字！")
    }
}

function insertNumLast() {
    if(num.value==""){
        alert("请输入一个数字");
    }
    else if(!isNaN(num.value)){
        var addLi = document.createElement('li');
        addLi.innerHTML = num.value;
        numBox.appendChild(addLi);
        num.value = "";
    }
    else {
        alert("请输入一个数字！");
    }
}
leftIn.addEventListener('click',insertNumBefore);
rightIn.addEventListener('click',insertNumLast);
var liList = numBox.getElementsByTagName("li");
function removeLeft() {
    liList[0].remove();
}
leftOut.addEventListener('click',removeLeft);
function removeRight() {
    liList[liList.length-1].remove();
}
rightOut.addEventListener('click',removeRight);