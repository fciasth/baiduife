/**
 * Created by zxh_s on 2017/7/12.
 */
var chessBoard = document.getElementById("chessboard");
var command = document.getElementById("command");
var btn = document.getElementById("btn");
var arrDir = 0;//默认方向 0为Up 1为RIGHT 2为BOTTOM 3为LEFT
var arrDirction = ["up","right","down","left"];

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
        if(block.colPos>1){
            block.colPos--;
        }
        clearBlock();
        block.selectedTd = getBlock(block.rowPos,block.colPos);
        changeDirction();
        drawBlock(block.selectedTd);
    }
    if(block.dirction=="right"){
        if(block.colPos<10){
            block.colPos++;
        }
        clearBlock();
        block.selectedTd = getBlock(block.rowPos,block.colPos);
        changeDirction();
        drawBlock(block.selectedTd);
    }
    if(block.dirction=="down"){
        if(block.rowPos<10){
            block.rowPos++;
        }
        clearBlock();
        block.selectedTd = getBlock(block.rowPos,block.colPos);
        changeDirction();
        drawBlock(block.selectedTd);
    }
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
/*给按钮绑定事件*/
btn.addEventListener("click",function(){
    if(command.value.trim().toUpperCase() == "TUN RIG"){
        turnRight();
    }
    if(command.value.trim().toUpperCase() == "TUN LEF"){
        turnLeft();
    }
    if(command.value.trim().toUpperCase() == "TUN BAC"){
        turnBottom();
    }
    if(command.value.trim().toUpperCase() == "GO"){
        go();
    }
});
