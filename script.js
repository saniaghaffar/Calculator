function getTheElements(val){
          document.getElementById("a").value+=val;
}
function solve(){
          var x=document.getElementById("a").value;
          var y=eval(x);
          document.getElementById("a").value=y;
}
function clr(){
          document.getElementById("a").value=" ";
}
function squaring(){
          var z=document.getElementById("a").value;
          var square=z*z;
          document.getElementById("a").value=square;
}
function squareRoot(){
          var r=document.getElementById("a").value;
          var s=Math.sqrt(r);
          document.getElementById("a").value=s;
}
