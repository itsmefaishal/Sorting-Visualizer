// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

function Selection_Sort(){

    document.getElementById("best-time").innerText = "O(N^2)";
    document.getElementById("avg-time").innerText = "O(N^2)";
    document.getElementById("worst-time").innerText = "O(N^2)";

    document.getElementById("space-comp").innerText = "O(1)";

    c_delay = 0;

    selectionSort(arraySize-1);

    enable_buttons();
}

function selectionSort(n){
    for(var i = 0; i <= n; i++){
        let mini = i;
        div_update(div[mini], divSizes[mini], "yellow");

        for(var j = i+1; j <= n; j++){

            div_update(div[j], divSizes[j], "yellow");
            
            if(divSizes[j] < divSizes[mini]){

                mini = j;

                div_update(div[mini], divSizes[mini], "red");
            }
            else{
                div_update(div[j], divSizes[j], "blue");
            }
        }

        div_update(div[i], divSizes[i], "red");
        div_update(div[mini], divSizes[mini], "red");

        let temp = divSizes[i];
        divSizes[i] = divSizes[mini];
        divSizes[mini] = temp;

        div_update(div[i], divSizes[i], "#04AA6D");
    }
}

// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com