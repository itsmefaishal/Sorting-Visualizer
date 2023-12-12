// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

var speed = 1000;

arraySpeed.addEventListener("input", speedOfAlgorithm);

function speedOfAlgorithm(){

    var arrSpeed = arraySpeed.value;

    switch(parseInt(arrSpeed)){
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }

    delayTime = 10000(Math.floor(arraySize/10) * speed);
}

var delayTime = 10000(Math.floor(arraySize/10) * speed);
var c_delay = 0;

function div_update(array_container, height, color){
    window.setTimeout(function(){
        array_container.style = " margin:0% " + marginSize + "%; width:" + (100/arraySize-(2*marginSize)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delayTime );
}

function enable_buttons(){
    window.setTimeout(function(){
        for(var i = 0; i < allAlgorithms.length; i++){
            allAlgorithms[i].classList = [];
            allAlgorithms[i].classList.add("selected");
            arraySize.disabled = true;
            getRandomButton.disabled = true;
            algoSpeed.disabled = true;
        }
    }, c_delay += delayTime);
}