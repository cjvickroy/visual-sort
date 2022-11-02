
function init(initArray) {
  clearContainer();
  initArray = fillArray(initArray);
  initArray = randomize(initArray);
  fillContainer(initArray);
}

function changeArraySize(size) {
  initArray = new Array(size);
}


async function insertionSort(thisArray) {

  //Grabbing the slider for speed controls
  var slider = document.getElementById('slider');

  //------Insertion sort-----

  let j, k;

  for (let i = 0; i < thisArray.length; i++) {
    k = thisArray[i];
    j = i - 1;

    while (j >= 0 && thisArray[j] > k) {
      if (isPaused.flag == true){
        break;
      }
    var sliderValue = slider.value;
    await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
      thisArray[j + 1] = thisArray[j];
      j = j - 1;
      refreshContainer(thisArray);
      highlightCurrent(j, 'blue');
      highlightCurrent(k, 'red');
    }
    thisArray[j + 1] = k;
    //refreshContainer(thisArray);
    // highlightCurrent(k, 'red');
  }
  isPaused.flag = false;
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