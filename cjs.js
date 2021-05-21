var x='';
var y='';
var t='',o='';

function dis(p){
    t+=p;
     document.getElementById("text").innerHTML=t;
     if(p=='+'||p=='-'||p=='*'||p=='/'){
         o=p;
     }
     else if(o==''){
         x+=p;
     }
     else{
         y+=p;
     }
}

function eval(){
   switch(o){
       case '+':x=Number(x)+Number(y);
       t=x;
       o='';
       y='';
       break;
       case '-':x=Number(x)-Number(y);
       t=x;
       o='';
       y='';
       break;
       case '*':x=Number(x)*Number(y);
       t=x; o='';y='';
       break;
       case '/':x=Number(x)/Number(y);
       t=x; o='';y='';
       break;
       default:;
   }
    
    document.getElementById("text").innerHTML=x;
    

}

function clr(){
    document.getElementById("text").innerHTML=0;
    x='';
 y='';
 t='';o='';
    
}