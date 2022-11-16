
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

async function cycleSort(thisArray) {

    //Grabbing the slider for speed controls
    var slider = document.getElementById('slider');
    var sliderValue = slider.value;

    console.log("Unsorted: " + thisArray);

    let n = thisArray.length;
    
    for (let i = 0; i <= n - 2; i++){
        if (isPaused.flag == true) {
            break;
          }
        refreshContainer(thisArray);
        let curr = thisArray[i];
        let position = i;

        for (let j = i + 1; j < n; j++){
            if (isPaused.flag == true) {
                break;
              }
            //var sliderValue = slider.value;
            //await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
            refreshContainer(thisArray);
            highlightCurrent(position, 'blue');
            if (thisArray[j] < curr){
                position++;
            }
        }
        
        if (position == i) continue;

        while (curr == thisArray[position]){
            if (isPaused.flag == true) {
                break;
              }
            var sliderValue = slider.value;
            await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
            position++;
            refreshContainer(thisArray);
            highlightCurrent(position, 'blue');
        }

        if (position != i){
            let x = curr;
            curr = thisArray[position];
            thisArray[position] = x;
            refreshContainer(thisArray);
            highlightCurrent(curr, 'red');
        }

        while (position != i){
            if (isPaused.flag == true) {
                break;
              }
            
            position = i;

            for (let j = i + 1; j < n; j++){
                if (isPaused.flag == true) {
                    break;
                  }
                if (thisArray[j] < curr){
                    var sliderValue = slider.value;
                    await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
                    position++;
                    refreshContainer(thisArray);
                    highlightCurrent(position, 'blue');
                }
            }

            while (curr == thisArray[position]){
                if (isPaused.flag == true) {
                    break;
                  }
                var sliderValue = slider.value;
                await new Promise(resolve => setTimeout(resolve, 110 - sliderValue));
                position++;
                refreshContainer(thisArray);
                highlightCurrent(position, 'blue');
            }

            if (curr != thisArray[position]){
                let x = curr;
                curr = thisArray[position];
                thisArray[position] = x;
                refreshContainer(thisArray);
                highlightCurrent(curr, 'red');
            }
        }
    }
    
    isPaused.flag = false;
    refreshContainer(thisArray);
    console.log("Sorted: " + thisArray);
    return thisArray;


}
