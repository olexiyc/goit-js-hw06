  
  
  
  
  const input = document.querySelector("#font-size-control");
  const text = document.querySelector("#text");

input.addEventListener("input", onChangeRange);
function onChangeRange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
 
  