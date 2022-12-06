let door = document.querySelector(".door");
let stone = document.querySelector(".stone");
document.addEventListener("keydown", logKey);
let keyDoor = document.querySelector(".keyDoor")
let stoneWidth= 50;
let  key = false;
openDoor = () =>{
   if(lefter == 0 && toper == 0){
      key = true;
      keyDoor.style.background="white"
      return key
   }
}

function logKey(e){
   if(e.code == "KeyE"){
      openDoor();

   }
 if(toper == 400 && lefter == 600 && e.code == "KeyE" && key == true){
 	
 	if(stoneWidth == 50){

 	stoneWidth = 200;
 	stone.style.width= 200 + "px";
   stone.style.background = 'url("door.png") no-repeat center';
   
 	if(e.code == "ArrowRight" ){
      lefter+=100
 		agent.style.left = lefter + "px";
 	  	
 	  }
 	//return stoneWidth;
 	 return lefter;
 	}
 	if(stoneWidth == 200){
 		stoneWidth=50;
 		stone.style.width= 50 + "px";
      //stone.style.background ="black"
 		return stoneWidth;
 	}
 }
 /*if(toper == 400 && lefter == 600 && e.code == "ArrowRight"){
    agent.style.left= lefter - 100 +"px";
 }*/
}
