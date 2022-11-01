
function init(initArray) {
    clearContainer();
    initArray = fillArray(initArray);
    initArray = randomize(initArray);
    fillContainer(initArray);
}

function changeArraySize(size) {
    initArray = new Array(size);
}

function swapIndex(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

async function selectionSort(thisArray) {

    //Grabbing the slider for speed controls
    var slider = document.getElementById('slider');
    var sliderValue = slider.value;

    console.log("Unsorted array: " + thisArray);

    //------Insertion sort-----

    let j, k;

    for (let i = 0; i < thisArray.length - 1; i++) {
        await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
        k = i;
        for (j = i + 1; j < thisArray.length; j++)
        if (thisArray[j] < thisArray[k])
            k = j;
 
        // Swap the found minimum element with the first element
        swapIndex(thisArray,k, i);
        refreshContainer(thisArray);
        highlightCurrent(k, 'red');
        highlightCurrent(i, 'blue');
    }
    console.log("Sorted array: " + thisArray);
    refreshContainer(thisArray);
}


function fillArray(array) {
    for (let i = 1; i < array.length + 1; i++) {
        array[i - 1] = i / 10;
    }
    return array;
}

function randomize(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function fillContainer(array) {
    var container = document.getElementsByClassName('element-container');
    for (let i = 0; i < array.length; i++) {
        var element = document.createElement('div');
        element.classList.add("element-item");
        element.style.height = array[i] * 400 + "px";
        container[0].appendChild(element);
    }
}

function clearContainer() {
    var container = document.getElementsByClassName('element-container');
    while (container[0].children.length > 0) {
        container[0].removeChild(container[0].lastChild);
    }
}


function refreshContainer(array) {
    clearContainer();
    fillContainer(array);
}

function waitFor(conditionFunction) {

    const poll = resolve => {
        if (conditionFunction()) resolve();
        else setTimeout(_ => poll(resolve), 400);
    }

    return new Promise(poll);
}