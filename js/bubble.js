
function init(initArray) {
  clearContainer();
  initArray = fillArray(initArray);
  initArray = randomize(initArray);
  fillContainer(initArray);
}

function changeArraySize(size) {
  initArray = new Array(size);
}

async function bubbleSort(thisArray) {

  //Grabbing the slider for speed controls
  var slider = document.getElementById('slider');
  var sliderValue = slider.value;

  //------Bubble sort------
  //Loop through the array

  for (let i = 0; i < thisArray.length; i++) {
    for (let j = 0; j < (thisArray.length - i - 1); j++) {
      var sliderValue = slider.value;
      if (isPaused.flag == true) {
        break;
      }
      if (thisArray[j] > thisArray[j + 1]) {
        var temp = thisArray[j]
        await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
        thisArray[j] = thisArray[j + 1]
        thisArray[j + 1] = temp
        refreshContainer(thisArray);
        highlightCurrent(j + 1, 'red');
      }
    }
  }
  isPaused.flag = false;
  refreshContainer(thisArray);

}
