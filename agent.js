let agent = document.querySelector(".agent");
document.addEventListener("keydown", logKey);
let cheat = document.querySelector(".textCheat");
let lefter = 100;
let toper = 400;
let cheatDisplay= 'none';
function logKey(e) {
	if(e.code == 'KeyB'){
		cheatDisplay = (cheatDisplay == "none") ? "block" :"none";
		cheat.style.display = cheatDisplay;
		return cheatDisplay;
	}

	if(e.code == 'ArrowRight'){
		
		if(toper == 400 && lefter == 600 && stoneWidth == 50|| toper== 200 && lefter == 600 && stoneWidth == 50 || toper== 300 && lefter == 600 && stoneWidth == 50 ){
       		agent.style.left = lefter - 100 + "px";
       		return lefter;
 		}else{
 			if(lefter == 600 && toper != 400){
				agent.style.left=500+"px";
				return lefter;
			}
			if(lefter == 1200 ){
				agent.style.left=1200+"px";
				return lefter;
			}
 			agent.style.left = lefter + "px";
			return lefter+=100   ;
		}
	}
	if(e.code == 'ArrowUp'){
		if(lefter == 700 || lefter == 600 || lefter == 800){
			agent.style.top= 400+"px";
			return toper;
			}
		if(toper == 0){
			agent.style.top="0px"
			return toper;
		}
		toper -= 100
		agent.style.top =  toper + "px";
		return toper ;
	}
	if(e.code == 'ArrowLeft'){
		if(lefter == 800 && toper != 400){
			agent.style.left=800+"px";
			return lefter;
			}
		if(lefter == 0 ){
			agent.style.left=0+"px";
			return lefter;
		}
		lefter= lefter-100;
		agent.style.left = lefter  + "px";
		return lefter ;
	}
	if(e.code == 'ArrowDown'){
		toper+=100;
		if(toper > 400){
			toper = 400;
		}
		agent.style.top =  toper + "px";
		return toper ;
	}
	/*if(e.code == 'Space'){
		let ret = 50;
		agent.style.top = ret + "px";
			prug = () =>{
			agent.style.top = (toper-150) + "px";}
		setTimeout(prug, 100);	
	}*/
	
	
}