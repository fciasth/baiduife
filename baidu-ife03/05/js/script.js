/**
 * Created by zxh_s on 2017/7/12.
 */
var chessBoard = document.getElementById("chessboard");
var btn = document.getElementById("btn");
var arrDir = 0;//默认方向 0为Up 1为RIGHT 2为BOTTOM 3为LEFT
var arrDirction = ["up","right","down","left"];
var btnGo =  $("go");
var btnTunLef = $("tun_lef");
var btnTunRig = $("tun_rig");
var btnTunBor = $("tun_bot");
var btnMovLef = $("mov_lef");
var btnMovRig = $("mov_rig");
var btnMovBot = $("mov_bot");
var btnMovTop = $("mov_top");
var btnTraLef = $("tra_lef");
var btnTraRig = $("tra_rig");
var btnTraTop = $("tra_top");
var btnTraBot = $("tra_bot");

function $(id) {
    return document.getElementById(id);
}
var block = {
    selectedTd : getBlock(5,6),
    dirction:"up",
    rowPos:5,
    colPos:6,
};

function getBlock(rowPos,colPos) {
    return chessBoard.children[rowPos].children[colPos];
}

function drawBlock(ele) {
    ele.className = "block";
    ele.innerHTML = "<div></div>";
}
drawBlock(block.selectedTd);

function turnLeft() {
    if(arrDir>0){
        arrDir--;
    }
    else {
        arrDir = 3;
    }
    block.dirction = arrDirction[arrDir];
    changeDirction();
}
function turnRight() {
    if(arrDir<3){
        arrDir++;
    }
    else {
        arrDir=0;
    }
    block.dirction = arrDirction[arrDir];
    changeDirction();
}
function turnBottom() {
    if(arrDir==2){
        arrDir=0;
    }
    else if(arrDir==3){
        arrDir=1;
    }
    else {
        arrDir+=2;
    }
    block.dirction = arrDirction[arrDir];
    changeDirction();
}
function go() {
    if(block.dirction=="up"){
        if(block.rowPos>1){
            block.rowPos--;
        }
    clearBlock();
        block.selectedTd = getBlock(block.rowPos,block.colPos);
        // changeDirction();
        drawBlock(block.selectedTd);
    }
    if(block.dirction=="left"){
        movLeft();
    }
    if(block.dirction=="right"){
        movRight();
    }
    if(block.dirction=="down"){
        movBottom();
    }
}
function turnTop() {
    if(arrDir<2){
        arrDir+=2;
    }
    else{
        arrDir-=2;
    }
    block.dirction = arrDirction[arrDir];
    changeDirction();
}

function traLef() {
    if(block.colPos>1){
        block.colPos--;
    }
    clearBlock();
    block.selectedTd = getBlock(block.rowPos,block.colPos);
    changeDirction();
    drawBlock(block.selectedTd);
}
function traRig() {
    if(block.colPos<10){
        block.colPos++;
    }
    clearBlock();
    block.selectedTd = getBlock(block.rowPos,block.colPos);
    changeDirction();
    drawBlock(block.selectedTd);
}
function traBot() {
    if(block.rowPos<10){
        block.rowPos++;
    }
    clearBlock();
    block.selectedTd = getBlock(block.rowPos,block.colPos);
    changeDirction();
    drawBlock(block.selectedTd);
}
function traTop() {
    if(block.rowPos>0){
        block.rowPos--;
    }
    clearBlock();
    block.selectedTd = getBlock(block.rowPos,block.colPos);
    changeDirction();
    drawBlock(block.selectedTd);
}
function clearBlock() {
    block.selectedTd.className="";
    block.selectedTd.innerHTML="";

}

function changeDirction() {
    if(block.dirction=="up"){
        block.selectedTd.style.transform = "rotate(0deg)";
    }
    if(block.dirction == "right"){
        block.selectedTd.style.transform = "rotate(90deg)";
    }
    if(block.dirction == "down"){
        block.selectedTd.style.transform = "rotate(180deg)";
    }
    if(block.dirction == "left"){
        block.selectedTd.style.transform = "rotate(-90deg)";
    }
}
function movLeft() {
    turnLeft();
    traLef();
}
function movTop(){
    turnTop();
    traTop();
}

function movRight(){
    turnRight();
    traRig();
}

function movBottom(){
    turnBottom();
    traBot();
}

btnGo.addEventListener("click",go);
btnTunLef.addEventListener("click",turnLeft);
btnTunRig.addEventListener("click",turnRight);
btnTunBor.addEventListener("click",turnBottom);
btnMovLef.addEventListener("click",movLeft);
btnMovRig.addEventListener("click",movRight);
btnMovBot.addEventListener("click",movBottom);
btnMovTop.addEventListener("click",movTop);
btnTraLef.addEventListener("click",traLef);
btnTraRig.addEventListener("click",traRig);
btnTraTop.addEventListener("click",traTop);
// btnTraBot.onclick=traTop;
btnTraBot.addEventListener("click",traBot);