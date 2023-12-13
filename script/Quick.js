// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

function Quick(){

    document.getElementById("best-time").innerText = "O(N log N)";
    document.getElementById("avg-time").innerText = "O(N log N)";
    document.getElementById("worst-time").innerText = "O(N^2)";

    document.getElementById("space-comp").innerText = "O(1)";

    console.log("quick");

    c_delay = 0;

    quickSort(0, arraySize - 1);

    enable_buttons();
}

function quickSort(start, end){
    if(start < end){
        let pivot = partition(start, end);

        quickSort(start, pivot-1);
        quickSort(pivot+1, end);
        div_update(div[pivot], divSizes[pivot], "#04AA6D");

    }
    div_update(div[start], divSizes[start], "#04AA6D");
    div_update(div[end], divSizes[end], "#04AA6D");
}

function partition(start, end){
    
    let pivot = divSizes[start];
    let i = start+1;
    div_update(div[start], divSizes[start], "yellow");
    
    for(var j = start+1; j <= end; j++){
        if(divSizes[j] < pivot){
            div_update(div[j], divSizes[j], "yellow");

            div_update(div[i], divSizes[i], "red");
            div_update(div[j], divSizes[j], "red");

            var temp = divSizes[i];
            divSizes[i] = divSizes[j];
            divSizes[j] = temp;

            div_update(div[i], divSizes[i], "red");
            div_update(div[j], divSizes[j], "red");

            div_update(div[i], divSizes[i], "blue");
            div_update(div[j], divSizes[j], "blue");

            i++;
        }
    }
    div_update(div[i-1], divSizes[i-1], "red");
    div_update(div[start], divSizes[start], "red");

    var temp = divSizes[start];
    divSizes[start] = divSizes[i-1];
    divSizes[i-1] = temp;

    div_update(div[i-1], divSizes[i-1], "red");
    div_update(div[start], divSizes[start], "red");

    for(var k = start; k <= i; k++){
        div_update(div[k], divSizes[k], "blue");
    }
    
    return i-1;
}

// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com