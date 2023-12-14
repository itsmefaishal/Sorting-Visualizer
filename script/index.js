// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

var array_container = document.getElementById("array-container"); 
var getRandomButton = document.getElementById("randomize-button"); // generate button
var inputArraySize = document.getElementById("size");
var arraySize = inputArraySize.value;
var arraySpeed = document.getElementById("speed");
var algoSpeed = arraySpeed.value;
array_container.style = "flex-direction : row";


var allAlgorithms = document.getElementById("options");

getRandomButton.addEventListener("click", generateArray);
inputArraySize.addEventListener("input", updateArraySize);
var divSizes = [];
var div = [];
var marginSize;

function generateArray(){

  array_container.innerHTML = "";

  for(var i = 0; i < arraySize; i++){
    divSizes[i] = Math.floor(Math.random() * 0.5 * (inputArraySize.max - inputArraySize.min)) + 10;
    div[i] = document.createElement("div");
    array_container.appendChild(div[i]);
    marginSize = 0.1;
    div[i].style = " margin: " + marginSize + "%; background-color:blue; width:" + (100/(arraySize-(2*marginSize))) + "%; height:" + (divSizes[i]) + "%;";
  }

}

function updateArraySize(){
  arraySize = inputArraySize.value;
  generateArray();
}

window.onload = updateArraySize();

//choosing which algorithm to run
allAlgorithms.addEventListener("change", runAlgo);

function disableOptions() {
  for (var i = 0; i < allAlgorithms.length; i++) {
    allAlgorithms[i].classList.add("disabled");
    allAlgorithms[i].disabled = true;
  }

  inputArraySize.disabled = true;
  getRandomButton.disabled = true;
  arraySpeed.disabled = true;
}

function runAlgo(){
  disableOptions();

  var selected = allAlgorithms.value;
  allAlgorithms.classList.add("selected"); 

  if(selected == "none"){
    c_delay = 0;
    enable_buttons();
    return;
  }
  switch(selected){
    
    case "Merge" : Merge();
    break;
    case "Quick" : Quick();
    break;
    case "Insertion" : Insertion();
    break;
    case "Bubble" : Bubble();
    break;
    case "Selection" : Selection_Sort();
    break;
    case "Heap" : Heap();
    break;
  }
}

// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com