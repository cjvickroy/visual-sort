
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