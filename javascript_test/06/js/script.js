/**
 * Created by zxh_s on 2017/7/8.
 */
var num = document.getElementById('num');
var leftIn = document.getElementById("left-in");
var rightIn = document.getElementById("right-in");
var leftOut = document.getElementById("left-out");
var rightOut = document.getElementById("right-out");
var numBox = document.getElementById("num-box");
var sortBtn = document.getElementById('sort');
var searchValue = document.getElementById('search').value;
function insertNumBefore(){
    if(num.value==""){
        alert("请输入内容");
    }else{
        num = num.value;
        num=num.replace(/[^\w]/g," ");
        var arr = num.split(' ');
        for(var i = 0; i < arr.length; i++) {
            var addLi = document.createElement('li');
            addLi.innerHTML= arr[i];
            addLi.style.height=arr[i]*2+'px';
            numBox.insertBefore(addLi,numBox.firstChild);

        }
        num.value="";
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
       addLi.innerHTML = num.value;
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

// 为查询按钮绑定模糊匹配监听函数
function iSearch() {
   for(var i = 0;i<numBox.childNodes.length;i++){
       if(numBox.childNodes[i].innerHTML.match(searchValue)){
           numBox.childNodes[i].style.backgroundColor="#000";
       }
   }
};
document.getElementById('btn-search').addEventListener('click',iSearch);
