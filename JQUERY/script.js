$("#fs").change(function() {
  $('.changeMe').css("font-family", $(this).val());

});

$("#size").change(function() {
  $('.changeMe').css("font-size", $(this).val() + "px");
});

function bold(){
$(".changeMe").css("fontWeight","bold")}

function italics(){
$(".changeMe").css("fontStyle","italic")}

function underline(){
$(".changeMe").css("textDecoration","underline")}