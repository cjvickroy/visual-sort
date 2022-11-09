
function init(initArray) {
    clearContainer();
    initArray = fillArray(initArray);
    initArray = randomize(initArray);
    fillContainer(initArray);
}

function changeArraySize(size) {
    initArray = new Array(size);
}

async function merge(thisArray, left, mid, right) {

    //Grabbing the slider for speed controls
    var slider = document.getElementById('slider');
    var sliderValue = slider.value;

    var num1 = mid - left + 1;
    var num2 = right - mid;

    //Temporary arrays

    var tempL = new Array(num1);
    var tempR = new Array(num2);

    for (var i = 0; i < num1; i++){
        tempL[i] = thisArray[left + i];
    }

    for (var j = 0; j < num2; j++){
        tempR[j] = thisArray[mid + j + 1];
    }

    var i = 0;
    var j = 0;
    var key = left;

    while (i < num1 && j < num2){
        sliderValue = slider.value;
        await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
        if (tempL[i] <= tempR[j]){
            thisArray[key] = tempL[i];
            refreshContainer(thisArray);
            i++;
        }

        else {
            thisArray[key] = tempR[j];
            refreshContainer(thisArray);
            j++;
        }
        
        key++;
    }

    while (i < num1){
        sliderValue = slider.value;
        await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
        thisArray[key] = tempL[i];
        refreshContainer(thisArray);
        i++;
        key++;
    }

    while (j < num2){
        sliderValue = slider.value;
        await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
        thisArray[key] = tempR[j];
        refreshContainer(thisArray);
        j++;
        key++;
    }
}

async function mergeSort(thisArray, left, right){
    if (left >= right) return;

    var mid = left + parseInt((right - left) / 2);

    mergeSort(thisArray, left, mid);
    mergeSort(thisArray, mid + 1, right);
    merge(thisArray, left, mid, right);
    
}


