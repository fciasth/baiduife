
function isTel() {
    let telR = /\b1[3-8]\d{9}\b/

    let telephone = String(document.getElementById("tel").value);
    if(telR.test(telephone)){
        alert('手机号正确');
    }
    else {
        alert('手机号错误');
    }
}
function isWord() {
    let wordR = /\b([A-Za-z]+)\s+\1\b/;
    let word = document.getElementById("word").value;
    if(wordR.test(word)){
        alert('单词正确');
    }
    else {
        alert('单词错误');
    }
}