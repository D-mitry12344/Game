
let end = document.querySelector(".end");
let textEnd = document.querySelector(".textEnd")
let bod = document.querySelector('html')
let closed = document.querySelector(".closed");
let portal = document.querySelector(".portal");
let pool = document.querySelector(".pool");
text = () => {
   window.open('vidos.html', "_self")
}
document.addEventListener("keydown", logKey);
function logKey(e){
  if(toper == 400 && lefter == 1200 && e.code == 'KeyE' || toper == 400 && lefter == 100 && e.code == 'KeyE'){
   agent.style.animation="smalled 4s both";
   geroi.style.display="none";
   setTimeout(text, 5000);  
   }
}