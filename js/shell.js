
function init(initArray) {
    clearContainer();
    initArray = fillArray(initArray);
    initArray = randomize(initArray);
    fillContainer(initArray);
}

function changeArraySize(size) {
    initArray = new Array(size);
}

async function shellSort(thisArray) {

    //Grabbing the slider for speed controls
    var slider = document.getElementById('slider');
    var sliderValue = slider.value;

    let n = thisArray.length;

    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
    {
        var sliderValue = slider.value;
        for (let i = gap; i < n; i += 1)
        {
            let temp = thisArray[i];
            let j;
            for (j = i; j >= gap && thisArray[j - gap] > temp; j -= gap){
                if (isPaused.flag == true) {
                    break;
                  }
                var sliderValue = slider.value;
                await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
                thisArray[j] = thisArray[j - gap];
                refreshContainer(thisArray);
                highlightCurrent(thisArray[j], 'red');
                highlightCurrent(thisArray[j - gap], 'blue');
            }
            thisArray[j] = temp;
            refreshContainer(thisArray);
            highlightCurrent(thisArray[j], 'red');
            highlightCurrent(thisArray[j - gap], 'blue');
        }
    }
    isPaused.flag = false;
    refreshContainer(thisArray);
    return thisArray;


}
