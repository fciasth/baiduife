/**
 * Created by zxh_s on 2017/7/12.
 */
// var inSchool = document.getElementById("in-school");
// var outSchool = document.getElementById("out-school");
var inBlock = document.getElementById("in-block");
var outBlock = document.getElementById("out-block");
var inInput = document.getElementById("in");
var outInput = document.getElementById("out");
var city = document.getElementById("city");
var optionBj = document.getElementById("beijing-school");
var optionTj = document.getElementById("tianjin-school");
var optionNj = document.getElementById("nanjing-school");

function notice() {
    if(inInput.checked==true){
        inBlock.className="show";
        outBlock.className="none";
    }
    else {
        inBlock.className="none";
        outBlock.className="show";
    }
}
inInput.addEventListener("click",notice);
outInput.addEventListener("click",notice);
function cityChange() {
    if(city.value=="beijing"){
        optionBj.className="school on";
        optionTj.className="school";
        optionNj.className="school";
    }
    else if(city.value=="tianjin"){
        optionBj.className="school";
        optionTj.className="school on";
        optionNj.className="school";
    }
    else {
        optionBj.className="school";
        optionTj.className="school";
        optionNj.className="school on";
    }
}
city.addEventListener("click",cityChange);