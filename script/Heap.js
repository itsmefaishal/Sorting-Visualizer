// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

function Heap(){

    document.getElementById("best-time").innerText = "O(N log N)";
    document.getElementById("avg-time").innerText = "O(N log N)";
    document.getElementById("worst-time").innerText = "O(N log N)";

    document.getElementById("space-comp").innerText = "O(1)";

    c_delay = 0;

    heapSort();

    enable_buttons();
}

function heapSort(){

    for(var i = Math.floor(arraySize/2)-1; i >= 0; i--){
        maxHeapify(arraySize, i);
    }

    for(var i = arraySize-1; i > 0; i--){
        swap(0,i);
        
        div_update(div[i], divSizes[i], "#04AA6D");
        div_update(div[i], divSizes[i], "yellow");

        maxHeapify(i, 0);

        div_update(div[i], divSizes[i], "blue");
        div_update(div[i], divSizes[i], "#04AA6D");
    }

    div_update(div[i], divSizes[i], "#04AA6D");

}

function maxHeapify(n, i){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if(left < n && divSizes[left] > divSizes[largest]){
        if(largest != i){
            div_update(div[largest], divSizes[largest], "blue");
        }
        largest = left;
        div_update(div[largest], divSizes[largest], "red");
    }
    if(right < n && divSizes[right] > divSizes[largest]){
        if(largest != i){
            div_update(div[largest], divSizes[largest], "blue");
        }
        largest = right;
        div_update(div[largest], divSizes[largest], "red");
    }

    if(largest != i){
        swap(i, largest);
        maxHeapify(n, largest);
    }
}

function swap(i, j){

    div_update(div[i], divSizes[i], "red");
    div_update(div[j], divSizes[j], "red");

    var temp = divSizes[i];
    divSizes[i] = divSizes[j];
    divSizes[j] = temp;

    div_update(div[i], divSizes[i], "red");
    div_update(div[j], divSizes[j], "red");

    div_update(div[i], divSizes[i], "blue");
    div_update(div[j], divSizes[j], "blue");

}

// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com