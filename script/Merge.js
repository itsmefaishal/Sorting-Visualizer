// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com

function Merge(){

    document.getElementById("best-time").innerText = "O(N log N)";
    document.getElementById("avg-time").innerText = "O(N log N)";
    document.getElementById("worst-time").innerText = "O(N log N)";
    document.getElementById("space-comp").innerText = "O(1)";

    c_delay= 0;

    mergeSort(0,arraySize-1);

    enable_buttons();
}

function mergeSort(left, right){
    if(left < right){
        let mid = Math.floor((left + right)/2);
        div_update(div[mid], divSizes[mid], "yellow");

        mergeSort(left,mid);
        mergeSort(mid+1, right);

        merging(left, mid, right);
    }
}

function merging(l, mid, r){
    let i = l;
    let j = mid+1;
    let k = l;
    var arr = [];

    while(i <= mid && j <= r){

        if(divSizes[i] < divSizes[j]){
            arr[k] = divSizes[i];
            div_update(div[i], divSizes[i], "red");
            i++;
        }
        else{
            arr[k] = divSizes[j];
            div_update(div[j], divSizes[j], "red");
            j++;
        }
        k++;
    }

    if( i > mid){
        while(j <= r){
            arr[k++] = divSizes[j++];
            div_update(div[j], divSizes[j], "red");
        }
    }
    else{
        while(i <= mid){
            arr[k++] = divSizes[i++];
            div_update(div[i], divSizes[i], "red");
        }
    }

    for(k = l; k <= r; k++){
        divSizes[k] = arr[k];
        div_update(div[k], divSizes[k], "#04AA6D");
    }
}

// Project By - Faishal Rahman
// Email - rahmanfaishal2002@gmail.com