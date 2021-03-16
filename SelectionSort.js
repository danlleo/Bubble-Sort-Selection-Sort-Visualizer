async function selectionSortAlgorithm() {
    if (!isSorted()) {
        let arr = []
        let selectionSort_bars = document.getElementsByClassName('bars')

        sortArray.disabled = true
        sortArray.style.borderColor = '#4490fa'
        sortArray.style.color = '#4490fa'

        pointerLiEventHandler(false)

        generateButton.disabled = true
        generateButton.style.borderColor = '#4490fa'
        generateButton.style.color = '#4490fa'

        for (let i = 0; i < selectionSort_bars.length; i++) {
            arr.push(parseInt(selectionSort_bars[i].style.height))
        }

        for (let i = 0; i < arr.length; i++) {
            let min = i

            selectionSort_bars[i].style.backgroundColor = '#F0F4AC'

            await sleep(barsSettings['sortingSpeed'])
            
            let spotted_index = 0
            
            for (let j = i + 1; j < arr.length; j++) {
                await sleep(barsSettings['sortingSpeed'])

                selectionSort_bars[j].style.backgroundColor = '#4FC476'

                await sleep(barsSettings['sortingSpeed'])

                selectionSort_bars[j].style.backgroundColor = '#7DB4FF'

                
                if (arr[min] > arr[j]) {
                    if (spotted_index > 0) {
                        selectionSort_bars[spotted_index].style.backgroundColor = '#7DB4FF'
                    }

                    console.log(spotted_index)

                    min = j
                    spotted_index = j
                    selectionSort_bars[j].style.backgroundColor = 'green'
                }
            }

            selectionSort_bars[i].style.backgroundColor = '#7FFF9D'

            await sleep(barsSettings['sortingSpeed'])

            if (min !== i) {
                let tmp = arr[i]
                arr[i] = arr[min]
                arr[min] = tmp

                selectionSort_bars[i].style.backgroundColor = '#FF1B2D'
                selectionSort_bars[min].style.backgroundColor = '#FF1B2D'

                await sleep(barsSettings['sortingSpeed'])

                let tmp_bars = selectionSort_bars[i].style.height
                selectionSort_bars[i].style.height = selectionSort_bars[min].style.height
                selectionSort_bars[min].style.height = tmp_bars
                selectionSort_bars[min].style.backgroundColor = '#7DB4FF'

                selectionSort_bars[i].style.backgroundColor = '#7FFF9D'

                await sleep(barsSettings['sortingSpeed'])
            }
        }

        generateButton.disabled = false
        generateButton.style.borderColor = "black"
        generateButton.style.color = '#263646'

        sortArray.disabled = false
        sortArray.style.borderColor = 'black'
        sortArray.style.color = '#263646'

        pointerLiEventHandler(true)

        return arr
    }

    alert(false)
}