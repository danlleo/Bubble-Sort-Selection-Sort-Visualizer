function checkValues() {
    const bars_bubbleSort = document.getElementsByClassName('bars')

    let values = []

    for (let i = 0; i < bars_bubbleSort.length; i++) {
        values.push(parseInt(bars_bubbleSort[i].style.height))
    }

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (values[j] > values[j + 1]) {
                let temp = values[j]
                values[j] = values[j + 1]
                values[j + 1] = temp
            }
        }
    }

    return values
}