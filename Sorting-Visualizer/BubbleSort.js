async function bubbleSortAlgorithm() {
    if (!isSorted()) {
        var bubbleSort_end_values = checkValues()
        var bubbleSort_bars = document.getElementsByClassName('bars')
        
        sortArray.disabled = true
        sortArray.style.borderColor = '#4490fa'
        sortArray.style.color = '#4490fa'

        pointerLiEventHandler(false)

        generateButton.disabled = true
        generateButton.style.borderColor = '#4490fa'
        generateButton.style.color = '#4490fa'

        for (let i = 0; i < bubbleSort_bars.length; i++) {
            for (let j = 0; j < bubbleSort_bars.length - 1; j++) {
                bubbleSort_bars[j].style.backgroundColor = '#4FC476';
                bubbleSort_bars[j + 1].style.backgroundColor = '#4FC476';

                await sleep(barsSettings['sortingSpeed'])

                bubbleSort_bars[j].style.backgroundColor = '#7DB4FF'
                bubbleSort_bars[j + 1].style.backgroundColor = '#7DB4FF'

                if (parseInt(bubbleSort_bars[j].style.height) > parseInt(bubbleSort_bars[j + 1].style.height)) {
                    bubbleSort_bars[j].style.backgroundColor = '#FF1B2D'
                    bubbleSort_bars[j + 1].style.backgroundColor = '#FF1B2D'

                    await sleep(barsSettings['sortingSpeed'])

                    let temp = bubbleSort_bars[j].style.height

                    bubbleSort_bars[j].style.height = bubbleSort_bars[j + 1].style.height
                    bubbleSort_bars[j + 1].style.height = temp

                    bubbleSort_bars[j].style.backgroundColor = '#4FC476'
                    bubbleSort_bars[j + 1].style.backgroundColor = '#4FC476'

                    await sleep(barsSettings['sortingSpeed'])

                    bubbleSort_bars[j].style.backgroundColor = '#7DB4FF'
                    bubbleSort_bars[j + 1].style.backgroundColor = '#7DB4FF'
                }

                for (let i = bubbleSort_bars.length - 1; i => 0; i--) {
                    if (parseInt(bubbleSort_bars[i].style.height) == bubbleSort_end_values[i]) {
                        bubbleSort_bars[i].style.backgroundColor = '#7FFF9D'

                        if (i == 0) {
                            generateButton.disabled = false
                            generateButton.style.borderColor = "black"
                            generateButton.style.color = '#263646'

                            sortArray.disabled = false
                            sortArray.style.borderColor = 'black'
                            sortArray.style.color = '#263646'

                            pointerLiEventHandler(true)

                            return
                        }
                    } else break
                }
            }
        }
    }

    alert('false')
}