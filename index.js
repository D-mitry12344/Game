
let geroi = document.querySelector(".par");
  let left = 100;

get = () => {
    
    left = (left>1280) ? left-1100 : left+100;
    geroi.style.left = left + "px";
    return left +=100;;
};
document.addEventListener('keydown', logKey)
function logKey(e) {
    if(e.code == 'KeyZ'){
    get()
      };
}

