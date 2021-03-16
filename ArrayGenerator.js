const bars = document.getElementsByClassName('bars')
const mainContainer = document.getElementById('main-container')
const generateButton = document.getElementById('generateArray')

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateNewArray() {
    let bars = document.getElementsByClassName('bars')

    while(bars[0]) {
        bars[0].parentNode.removeChild(bars[0])
    }

    const array = []

    var bar_width

    if (barsSettings['barsAmount'] >= 5 && barsSettings['barsAmount'] <= 15) bar_width = `${40 + parseInt(barsSettings['barsWidth'])}px`
    if (barsSettings['barsAmount'] > 15 && barsSettings['barsAmount'] <= 35) bar_width = `${30 + parseInt(barsSettings['barsWidth'])}px`
    if (barsSettings['barsAmount'] > 35 && barsSettings['barsAmount'] <= 70) bar_width = `${20 + parseInt(barsSettings['barsWidth'])}px`
    if (barsSettings['barsAmount'] > 70 && barsSettings['barsAmount'] <= 100) bar_width = `${10 + parseInt(barsSettings['barsWidth'])}px`

    for (let i = 0; i < barsSettings['barsAmount']; i++) {
        array.push(randomIntFromInterval(40, 650))
    }

    for (let i = 0; i < barsSettings['barsAmount']; i++) {
        const bar = document.createElement('div') 
        bar.className = 'bars'
        bar.style.height = `${array[i]}px`
        bar.style.width = bar_width
        mainContainer.appendChild(bar)
    }
}

generateButton.addEventListener('click', generateNewArray)

generateNewArray()
