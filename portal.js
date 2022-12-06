document.addEventListener("keydown", logKey);
let end = document.querySelector(".end");
let textEnd = document.querySelector(".textEnd")
let bod = document.querySelector('html')
let closed = document.querySelector(".closed");
let portal = document.querySelector(".portal")ж
let pool = document.querySelector(".pool")
disp = () =>{
   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', "_self")
}
text = () => {
   textEnd.textContent = "ТЫ ПРОШЕЛ.МОЛОДЕЦ!!!! ТЕПЕРЬ ПРОСТО ПОДОЖДИ)";
   bod.style.background="darkgreen";
   keyDoor.style.display ="none";
   stone.style.display ="none";
   closed.style.display ="none";
   portal.style.display ="none";
   pool.style.display ="none";
}
function logKey(e){
  if(toper == 400 && lefter == 1200 && e.code == 'KeyE'){
   agent.style.animation="smalled 4s both"
   geroi.style.display="none"
   setTimeout(text, 5000);
   setTimeout(disp,13000)
  }
}
