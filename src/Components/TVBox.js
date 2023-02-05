export default function TVBox() {
    let box = document.querySelector("#box");
let xSpeed = 5;
let ySpeed = 5;

function moveBox() {
  let x = parseInt(window.getComputedStyle(box).left);
  let y = parseInt(window.getComputedStyle(box).top);
  
  if (x + box.offsetWidth >= window.innerWidth || x <= 0) {
    xSpeed = -xSpeed;
  }
  
  if (y + box.offsetHeight >= window.innerHeight || y <= 0) {
    ySpeed = -ySpeed;
  }
  
  box.style.left = x + xSpeed + "px";
  box.style.top = y + ySpeed + "px";
  
  requestAnimationFrame(moveBox);
}

moveBox();

    
    return (<>
        
        <div id="box"></div></>);
}