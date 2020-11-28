function open(){
 document.getElementById("modal").style.display="block";
 
}
function close(){
 document.getElementById("modal").style.display="none";
}


var Index = 1;
show(Index);

function plus(n) {
  show(Index += n);
}

function show(n) {
  var i;
  var x = document.getElementsByClassName("Slides");
  if (n > x.length) {Index = 1}
  if (n < 1) {Index = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[Index-1].style.display = "block";  
}
