// select elements in page
const stock = document.querySelector(".stock")
const selector = document.querySelector(".selector")
const resetButton = document.querySelector("#reset")
const doneButton = document.querySelector("#done")
const content = document.querySelector(".content")
const row = document.querySelector(".row")
let life = document.querySelector(".life")

const totalRows = 10

let allColors = []
let finalCode = []
let selectedColors = []
let rowsList = []
let rowCount = 0

stock.addEventListener("click", handleColorsClick)
resetButton.addEventListener("click", handleReset)
doneButton.addEventListener("click", handleDone)

// init
duplicateRow()
getColors()
createFinalCode()
life.textContent = totalRows

function duplicateRow () {
    for (let i = 1; i < totalRows; i++) {
        const newRow = row.cloneNode(true)
        content.append(newRow)
    }
    rowsList = Array.from(content.children)
}

function getColors () {
    Array.from(stock.children).map(child => {
        allColors.push(child.dataset.color)
    })
}

function createFinalCode () {
    for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * allColors.length)
        const randomColor = allColors.splice(randomNumber, 1)[0]
        finalCode.push(randomColor)
    }
    console.log(finalCode)
}

// handle events

function changeSelectorColor () {
    selectedColors.map((color, index) => {
        selector.children[index].dataset.color = color
    })
}

// handle colors click in stock
function handleColorsClick (event) {
    if (selectedColors.length < 4 && event.target.dataset.color) {
        const element = event.target
        const clickedColor = element.dataset.color
        element.style.display = "none"

        selectedColors.push(clickedColor)
        changeSelectorColor()
    }
}

// reset colors in selector
function handleReset () {
    selectedColors = []

    Array.from(selector.children).map(child => {
        child.dataset.color = null
    })
    Array.from(stock.children).map(child => {
        child.style.display = null
    })
}
// submit colors in game
function handleDone () {
    if (selectedColors.length === 4 && rowCount < totalRows) {
        const selectedRow = rowsList[rowCount]
        const selectedRowDots = Array.from(selectedRow.querySelector(".dots").children)
        let leftWitness = selectedRow.querySelectorAll(".witness")[0]
        let rightWitness = selectedRow.querySelectorAll(".witness")[1]
        let leftWitnessNumber = 0
        let rightWitnessNumber = 0

        selectedRowDots.map((dot, index) => {
            dot.dataset.color = selectedColors[index]
        })

        selectedColors.map((color, index) => {
            if (finalCode[index] === color) {
                rightWitnessNumber++
            } else {
                if (finalCode.includes(color)) {
                    leftWitnessNumber++
                }
            }
        })

        if (selectedColors.toString() === finalCode.toString()) {
            alert("You won !")
        }

        leftWitness.textContent = leftWitnessNumber
        rightWitness.textContent = rightWitnessNumber

        life.textContent = totalRows - rowCount - 1
        handleReset()
        rowCount++
    }
}