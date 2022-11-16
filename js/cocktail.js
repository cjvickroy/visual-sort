
function init(initArray) {
    clearContainer();
    initArray = fillArray(initArray);
    initArray = randomize(initArray);
    fillContainer(initArray);
}

function changeArraySize(size) {
    initArray = new Array(size);
}

function swap(thisArray, i, j){
    let x = thisArray[i];
    thisArray[i] = thisArray[j];
    thisArray[j] = x;
}

async function cocktailSort(thisArray) {

    //Grabbing the slider for speed controls
    var slider = document.getElementById('slider');
    var sliderValue = slider.value;

    let first = 0;
    let last = thisArray.length;
    let swapped = true;

    while (swapped == true){
        swapped = false;

        for (let i = first; i < last; i++){
            if (isPaused.flag == true) {
                break;
              }

            if (thisArray[i] > thisArray[i + 1]){
                sliderValue = slider.value;
                await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
                swap(thisArray, i, i+1);
                refreshContainer(thisArray);
                highlightCurrent(i, 'red');
                swapped = true;
                
            }
        }

        if (!swapped) break;

        swapped = false;
        last--;

        for (let i = last - 1; i >= first; i--){
            if (isPaused.flag == true) {
                break;
              }
            if (thisArray[i] > thisArray[i + 1]){
                sliderValue = slider.value;
                await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
                swap(thisArray, i, i+1);
                refreshContainer(thisArray);
                highlightCurrent(i, 'red');
                swapped = true;

            }
        }

        first++;

        refreshContainer(thisArray);

    }

    isPaused.flag = false;
    refreshContainer(thisArray);


}
