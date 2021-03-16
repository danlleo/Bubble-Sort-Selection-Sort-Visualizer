const modalContainer = document.getElementById('modal-container')
const closeBtn = document.getElementById('modal-close')
const confirmBtn = document.getElementById('modal-confirm')
const overlay = document.getElementById('overlay')
const settingsBtn = document.getElementById('settings')

const barsAmountInput = document.getElementById('bars-amount-input')
const barsSpeedInput = document.getElementById('bars-speed-input')
const barsWidthInput = document.getElementById('bars-width-input')

const barsSettings = {
    "barsAmount": 100,
    "sortingSpeed": 100,
    "barsWidth": 5
}

function loadSettings() {
    if (localStorage.getItem('settings') !== null) {
        var savedSettings = JSON.parse(localStorage.getItem('settings'))
        barsSettings["barsAmount"] = savedSettings['barsAmount']
        barsSettings["sortingSpeed"] = savedSettings['sortingSpeed']
        barsSettings["barsWidth"] = savedSettings['barsWidth']
    }
}

function saveSettings(barsAmount, barsSpeed, barsWidth) {
    barsSettings["barsAmount"] = barsAmount
    barsSettings["sortingSpeed"] = barsSpeed
    barsSettings["barsWidth"] = barsWidth

    localStorage.setItem("settings", JSON.stringify(barsSettings))
}

function toggleOff() {
    modalContainer.style.visibility = 'hidden'
    overlay.style.display = 'none'
}

function toggleOffButtons() {
    closeBtn.style.visibility = 'hidden'
    confirmBtn.style.visibility = 'hidden'
}

function clearInputs() {
    barsAmountInput.value = ''
    barsSpeedInput.value = ''
    barsWidthInput.value = ''
}

loadSettings()

settings.addEventListener('click', () => {
    modalContainer.style.visibility = 'visible'
    overlay.style.display = 'block'
    closeBtn.style.visibility = 'visible'
    confirmBtn.style.visibility = 'visible'
})

overlay.addEventListener('click', () => {
    toggleOff()
    clearInputs()
    toggleOffButtons()
})

closeBtn.addEventListener('click', () => {
    toggleOff()
    clearInputs()
    toggleOffButtons()
})

confirmBtn.addEventListener('click', () => {
    var barsAmountValue = barsAmountInput.value
    var barsSpeedValue = barsSpeedInput.value
    var barsWidthValue = barsWidthInput.value

    if (!barsAmountValue) {
        barsAmountValue = barsSettings["barsAmount"]
    }
    if (!barsSpeedValue) {
        barsSpeedValue = barsSettings['sortingSpeed']
    }
    if (!barsWidthValue) {
        barsWidthValue = barsSettings['barsWidth']
    }

    saveSettings(barsAmountValue, barsSpeedValue, barsWidthValue)
    toggleOff()
    toggleOffButtons()
    clearInputs()
    generateNewArray()
})