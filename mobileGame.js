
let upBut = document.querySelector(".upBut");
let cuda ;
cuda="ArrowUp";
let por = false;
//document.addEventListener( "click" , get)
upBut.onclick = () =>{
	por=true;
	return por;
	document.addEventListener("keydown", logKey);
	function logKey(e){
	if(por == true){
		e.code = cuda;
		console.log("yes@")
	}
}
}

