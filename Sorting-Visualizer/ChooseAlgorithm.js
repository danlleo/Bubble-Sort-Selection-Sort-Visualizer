const bubbleSort = document.getElementById('btn-BubbleSort')
const selectionSort = document.getElementById('btn-SelectionSort')
const sortArray = document.getElementById('sortArray')

let algorithmToRun

function setColorOfList(button) {
    const buttons = document.getElementsByClassName('btn-algorithm')

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id == button.id) {
            buttons[i].style.color = '#4490fa'
        } else {
            buttons[i].style.color = 'black'
        }
    }
}

bubbleSort.addEventListener('click', () => {
    algorithmToRun = 'BubbleSort'
    setColorOfList(bubbleSort)
})

selectionSort.addEventListener('click', () => {
    algorithmToRun = 'SelectionSort'
    setColorOfList(selectionSort)
})

sortArray.addEventListener('click', () => {
    if (algorithmToRun == 'BubbleSort') {
        bubbleSortAlgorithm()
    }
    if (algorithmToRun == 'SelectionSort') {
        console.log(selectionSortAlgorithm())
    }
})