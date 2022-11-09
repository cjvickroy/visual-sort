
function init(initArray) {
    clearContainer();
    initArray = fillArray(initArray);
    initArray = randomize(initArray);
    fillContainer(initArray);
}

function swap(thisArray, i, j){
    
    let x = thisArray[i];
    thisArray[i] = thisArray[j];
    thisArray[j] = x;
    refreshContainer(thisArray);
}

function changeArraySize(size) {
    initArray = new Array(size);
}

async function partition(thisArray, l, h){

    var slider = document.getElementById('slider');
    var sliderValue = slider.value;

    let pivot = thisArray[h];

    let i = (l - 1);

    for (let j = l; j <= h; j++){
        sliderValue = slider.value;
        await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
        if (thisArray[j] < pivot){
            i++;
            swap(thisArray, i, j);
        }
    }

    swap(thisArray, i + 1, h);
    return (i + 1);

}

async function quickSort(thisArray, l, h){

    if (l < h){
        let partitionIdx = partition(thisArray, l, h);
        quickSort(thisArray, l, partitionIdx - 1);
        quickSort(thisArray, partitionIdx + 1, h);
    }
}

function quickSortDriver(thisArray){
    console.log("Unsorted: " + thisArray);
    quickSort(thisArray, 0, thisArray.length - 1);
    console.log("Sorted: " + thisArray);
}
