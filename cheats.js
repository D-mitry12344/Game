const requestUrl= "https://jsonplaceholder.typicode.com/users";
const xhl = new XMLHttpRequest()
let body={};
newCode = (newCheat) => {
	 body = {
	cheatCode: newCheat,
	}
	return body;
}
let cet = 0;
document.addEventListener("keydown", logKey);
function logKey(e) {
	if(e.code == "Enter"){
		newCode(cheat.value);
		xhl.open("POST", requestUrl, body )
		xhl.setRequestHeader("Content-type", "application/json")
		xhl.onload = () => {
			 cet = JSON.parse(xhl.response);
			console.log(cet.cheatCode)
		}
		xhl.send(JSON.stringify(body));

	}
	if(e.code == "KeyM"){
		console.log(cet.cheatCode)
		xhl.open("get", requestUrl)
		xhl.send();
	}
}


