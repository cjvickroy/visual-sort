async function bubbleSort() {

  //Grabbing the slider for speed controls
  var slider = document.getElementById('slider');
  var sliderValue = slider.value;
 console.log(sliderValue);

  //Creating a test array
  let thisArray = new Array(10);

  //Fill the array, 1-maxsize
  thisArray = fillArray(thisArray);

  //Randomize the array
  thisArray = randomize(thisArray);
  fillContainer(thisArray);

  //Log the unsorted array
  console.log("Unsorted array: " + thisArray);

  //------Bubble sort------
  //Loop through the array
  for (let i = 0; i < thisArray.length; i++) {
    for (let j = 0; j < (thisArray.length - i - 1); j++) {

      //Swap if out of order
      if (thisArray[j] > thisArray[j + 1]) {
        var temp = thisArray[j]
        
        await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
        thisArray[j] = thisArray[j + 1]
        thisArray[j + 1] = temp
        console.log("Swapping index " + j + " and " + (j+1));
        refreshContainer(thisArray);
      }
    }
  }

  //Output the sorted array
  console.log("Sorted array: " + thisArray);

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
  for (let i = 0; i < array.length; i++){
    var element = document.createElement('div');
    element.classList.add("element-item");
    element.style.height = array[i] * 400 + "px";
    container[0].appendChild(element);
  }
}

function clearContainer(){
  var container = document.getElementsByClassName('element-container');
  while (container[0].children.length > 0){
    container[0].removeChild(container[0].lastChild);
  }
}


function refreshContainer(array){
  clearContainer();
  fillContainer(array);
}