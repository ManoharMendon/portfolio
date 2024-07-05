'use strict';

let count=0;
let climithtml=85;
let climitcss=70;
let climitpython=60;
let climitjs=75;
let climitphp=50;
let climitsql=60;
let climitc=65;
let climitjava=68;
const loadbar= (el,count,climit)=>{
    setInterval(()=>{
        if(count== climit){
            clearInterval();
        }
        else{
            count+=1;
            el.innerHTML = count +"%";
        }
    },25)
};
loadbar(number,count,climithtml);
loadbar(number_css,count,climitcss);
loadbar(number_python,count,climitpython);
loadbar(number_js,count,climitjs);
loadbar(number_sql,count,climitsql);
loadbar(number_c,count,climitc);
loadbar(number_php,count,climitphp);

loadbar(number_java,count,climitjava);
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
console.log("hi")
 window.addEventListener('scroll',reveal);
  function reveal(){
    var  reveals=document.querySelectorAll('.scrolled')
    console.log(reveals)
    for(var i =0;i<reveals.length;i++){
      var wHeight=window.innerHeight;
      var revealTop=reveals[i].getBoundingClientRect().top;
      var revealPoint=150;
      if(revealTop<wHeight-revealPoint){
        reveals[i].classList.add('actives');
      }else{
        reveals[i].classList.remove('actives');
      }
    }
  }