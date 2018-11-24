

var fontSizeDD = document.getElementById('fontSizeDD');
fontSizeDD.onchange = function () {
    var txtBox = document.getElementById("textbox")
    txtBox.style.fontSize = this.value +"px";
}
var changeFont = function(font){
  console.log(font.value)
    document.getElementById("textbox").style.fontFamily = font.value;
}

function bold() {
  document.getElementById("textbox").style.fontWeight = "bold";
}
 function italics() {
  document.getElementById("textbox").style.fontStyle = "italic";
}
function underline() {
  document.getElementById("textbox").style.textDecoration = "underline";
}