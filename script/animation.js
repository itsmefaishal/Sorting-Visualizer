// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

let speed;

arraySpeed.addEventListener("input", speedOfAlgorithm);

function speedOfAlgorithm(){
    
    var arrSpeed = arraySpeed.value;

    switch(parseInt(arrSpeed)){
        case 1: speed=50;
                break;
        case 2: speed=100;
                break;
        case 3: speed=250;
                break;
        case 4: speed=500;
                break;
        case 5: speed=1000;
                break;
        case 6: speed=2000;
                break;
        case 7: speed=3000;
                break;
        case 8: speed=5000;
                break;
        case 9: speed=7500;
                break;
        case 10: speed=10000;
                break;
    }

    delayTime = 10000/(Math.floor(arraySize/10) * speed);
}

var delayTime = 10000/(Math.floor(arraySize/10) * speed);

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
            allAlgorithms[i].disabled = false;
            inputArraySize.disabled = false;
            getRandomButton.disabled = false;
            arraySpeed.disabled = false;
        }    
    }, c_delay += delayTime);
}

// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com