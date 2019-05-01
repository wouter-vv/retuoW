window.onload = function () {
    var ball = document.getElementById('firstname')
    ball.style.marginLeft = "25px";
};

var fontType = ["Ultra", "VT323", "ZCOOL KuaiLe", "Black And White Picture", "Tulpen One", "Faster One"];
var num;
num = Math.floor(Math.random() * 6);
document.getElementById("firstname").style.fontFamily = fontType[num];