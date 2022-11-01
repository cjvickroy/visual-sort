//--------Globals--------
var initArray = new Array(10);
let isPaused = {
    flag: false
};

function highlightCurrent(index, color){
    var item = $('.element-item');
    $(item[index]).css('background-color', color);
}

function updateElementCount(array){
    var count = document.getElementById('inputBox').valueAsNumber;
    initArray = new Array(count);
    init(initArray);
}

function playPause(flagObject){
    if (flagObject.flag === true) {
        flagObject.flag = false;
        console.log("Flag is now " + flagObject.flag);
        return;   
    }
    else {
        flagObject.flag = true;
        console.log("Flag is now " + flagObject.flag);
        return;
    }

}

function checkFlag(flagObject){
    if (flagObject.flag === true){
        window.setTimeout(checkFlag, 100, flagObject);
    }
    else {
        return;
    }
}

function fillArray(array) {
    for (let i = 1; i < array.length + 1; i++) {
        array[i - 1] = i;
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
    var maxSize = array.length;
    for (let i = 0; i < array.length; i++) {
        var element = document.createElement('div');
        element.classList.add("element-item");
        element.style.height = (array[i] / maxSize) * 100 + "%";
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