// var nu1;
// var nu2;
// var nu3;
// var n;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var  nu1 = parseInt($("input#n1").val());
    var  nu2 = parseInt($("input#n2").val());
    var nu3 = parseInt($("input#n3").val());
    var n = [nu1, nu2, nu3].sort();
    if ((n[0] + n[1])> n[2]) {
      if(n[0]==n[1]&& n[0]==n[2]){
        $("#answer").html("<h2>This one is an Equilateral triangle!</h2>");
        $("#triImg").attr("src","http://upload.wikimedia.org/wikipedia/commons/e/e0/Equilateral-triangle.svg");
      } else if (n[0]==n[1]|| n[0]==n[2]) {
        $("#answer").html("<h2>This one is an Isosceles triangle!</h2>");

      }else{
        $("#answer").html("<h2>This one is an Scalene triangle!</h2>");
      }
    } else {
      $("#answer").html("<h2>This one is NOT a triangle!</h2>");
    }
  });
});
