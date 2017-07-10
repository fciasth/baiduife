/**
 * Created by zxh_s on 2017/7/9.
 */
var btnPro = document.getElementById("pro");
var btnMid = document.getElementById("mid");
var btnAfter = document.getElementById("after");
var tree = document.getElementById("B-tree");
var timer = 0;
//先序遍历
function show(node) {
    // alert(node.tagName);
    node.style.backgroundColor="#ffffff";
    setTimeout(function () {
        node.style.backgroundColor="#ff524a";
    },timer+=500);
    setTimeout(function () {
        node.style.backgroundColor="#ffffff";
    },timer+=500);
}
function preOrder(node) {
    if(node){
        show(node);
        preOrder(node.children[0]);
        preOrder(node.children[1]);
    }
}

function inOrder(node) {
    if(node){
        inOrder(node.children[0]);
        show(node);
        inOrder(node.children[1]);
    }
}

function postOrder(node) {
    if(node){
        postOrder(node.children[0]);
        show(node);
        postOrder(node.children[1]);
    }
}

btnPro.addEventListener("click",function () {
    preOrder(tree);
    timer=0;
},false);
btnMid.addEventListener("click",function () {
    inOrder(tree);
    timer=0;
},false);
btnAfter.addEventListener("click",function () {
    postOrder(tree);
    timer=0;
},false);