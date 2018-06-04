var pressed = false;
var showMoreButton = document.getElementById("showMore");
showMoreButton.addEventListener('click',() => {
  if (pressed === false){
    showMoreButton.innerHTML = "Show Less"
    pressed = true;
  }
  else{
    showMoreButton.innerHTML = "Show More"
    pressed = false;
  }
})
