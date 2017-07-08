/**
 * Created by zxh_s on 2017/7/8.
 */
/**
 * Created by zxh_s on 2017/7/8.
 */
var num = document.getElementById('num');
var leftIn = document.getElementById("left-in");
var rightIn = document.getElementById("right-in");
var leftOut = document.getElementById("left-out");
var rightOut = document.getElementById("right-out");
var numBox = document.getElementById("num-box");
var sortBtn = document.getElementById('sort')
function insertNumBefore(){
    if(num.value==""){
        alert("请输入一个数字");
    }else if(!isNaN(num.value)&&num.value>=10&&num.value<=100){
        var addLi=document.createElement('li');
        // addLi.innerHTML=num.value;
        addLi.style.height=num.value*2+'px';
        numBox.insertBefore(addLi,numBox.firstChild);
        num.value="";
    }else{
        alert("格式不对，请您重新输入一个数字！范围10-100！")
    }
    if(liList.length>60){
        alert("队列元素数量最多限制为60个")
    }
}

function insertNumLast() {
    if(num.value==""){
        alert("请输入一个数字");
    }
    else if(!isNaN(num.value)){
        var addLi = document.createElement('li');
        addLi.style.height=num.value*2+'px';
        // addLi.innerHTML = num.value;
        numBox.appendChild(addLi);
        num.value = "";
    }
    else {
        alert("请输入一个数字！");
    }
    if(liList.length>60){
        alert("队列元素数量最多限制为60个")
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

function liSort() {
    if(liList.length<1){
        return liList;
    }
    var temp = new Array;
    for(var i=0;i<liList.length;i++){
        var m=liList[i].style.height;
        m=m.replace("px","");
        temp.push(m);
    }
    temp.sort(function(a,b){
        return a-b;
    });
    for(var n=0;n<temp.length;n++){
        liList[n].style.height=temp[n]+"px";
    }
    return liList;
}
sortBtn.addEventListener('click',liSort);