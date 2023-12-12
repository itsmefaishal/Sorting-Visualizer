// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

function Bubble(){

    document.getElementById("best-time").innerText = "O(N)";
    document.getElementById("avg-time").innerText = "O(N^2)";
    document.getElementById("worst-time").innerText = "O(N^2)";

    document.getElementById("space-comp").innerText = "O(1)";

    console.log("bubble");

    c_delay = 0;

    for(var i = 0; i < arraySize - 1; i++){
        for(var j = 0; j < arraySize - i - 1; j++){
        div_update(div[j], divSizes[j], "yellow");
            if(divSizes[j] > divSizes[j+1]){
                div_update(div[j], divSizes[j], "red");
                div_update(div[j+1], divSizes[j+1], "red");

                var temp = divSizes[j];
                divSizes[j] = divSizes[j+1];
                divSizes[j+1] = temp;

                div_update(div[j], divSizes[j], "red");
                div_update(div[j+1], divSizes[j+1], "red");
            }
            div_update(div[j], divSizes[j], "blue");
        }
        div_update(div[j], divSizes[j], "#04AA6D");
    }
    div_update(div[0], divSizes[0], "#04AA6D");

    enable_buttons();
}