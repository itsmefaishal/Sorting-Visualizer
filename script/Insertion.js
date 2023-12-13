// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

function Insertion(){

    document.getElementById("best-time").innerText = "O(N)";
    document.getElementById("avg-time").innerText = "O(N^2)";
    document.getElementById("worst-time").innerText = "O(N^2)";

    document.getElementById("space-comp").innerText = "O(1)";

    c_delay = 0;

    insertionSort(arraySize-1);

    div_update(div[0], divSizes[0], "#04AA6D");
    div_update(div[arraySize-1], divSizes[arraySize-1], "#04AA6D");

    enable_buttons();
}

function insertionSort(n){
    for(var i = 0; i <= n; i++){
        let temp = divSizes[i];
        let j = i-1;

        div_update(div[i], divSizes[i], "yellow");

        while(j >= 0 && divSizes[j] > temp){

            div_update(div[j], divSizes[j], "red");
            div_update(div[j+1], divSizes[j+1], "red");


            divSizes[j+1] = divSizes[j];

            div_update(div[j], divSizes[j], "red");
            div_update(div[j+1], divSizes[j+1], "red");

            div_update(div[j], divSizes[j], "blue");
            if(i == j-1){
                div_update(div[i], divSizes[i+1], "yellow");
            }
            else{
                div_update(div[i], divSizes[i+1], "blue");
            }
            j--;
        }

        divSizes[j+1] = temp;

        for(var k = 0; k < i; k++){
            div_update(div[k], divSizes[k], "#04AA6D");
        }
        // div_update(div[j+1], divSizes[j+1], "#04AA6D");
    }
}