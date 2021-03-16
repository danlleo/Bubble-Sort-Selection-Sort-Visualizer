function pointerLiEventHandler(enable) {
    const buttons = document.getElementsByClassName('btn-algorithm')

    if (enable) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.pointerEvents = 'auto'
        }

        generateButton.style.pointerEvents = 'auto'
        sortArray.style.pointerEvents = 'auto'
        settings.style.pointerEvents = 'auto'
    } else {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.pointerEvents = 'none'
        }

        generateButton.style.pointerEvents = 'none'
        sortArray.style.pointerEvents = 'none'
        settings.style.pointerEvents = 'none'
    }
}

function isSorted() {
    var bars_sorted = document.getElementsByClassName('bars')
    var array = []

    for (let i = 0; i < bars_sorted.length; i++) {
        array.push(parseInt(bars_sorted[i].style.height))
    }
    
    for (let i = 1; i < bars_sorted.length; i++) {
        if (array[i] < array[i - 1]) {
            return false
        }
    }

    return true
}