'use strict'
//* get all the querySelectors into variables
const container = document.querySelector('#container')
const clearBtn = document.querySelector('.clearGrid')
const rainbowBtn = document.querySelector('.rainbowMode')
const activeLight = document.querySelector('.active')
let active = false
//* Create the 16x16 GRID
const createGrid = function (rows, collumns) {
  let totalGrid = rows * collumns
  for (let i = 0; i < totalGrid; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => colorGrid(square))
    container.style.setProperty(
      'grid-template-columns',
      `repeat(${collumns}, 2fr)`,
    )
    container.style.setProperty('grid-template-rows', `repeat(${rows}, 2fr)`)
    container.appendChild(square)
  }
}
createGrid(16, 16)

//* Clear GRID function
const clearGrid = function (columns = 16) {
  container.innerHTML = ''
  columns = Number(
    prompt('Type the number of squares you want between 1 and 100', ''),
  )
  if (columns > 100) {
    alert('To many squares! Try again!')
  } else {
    columns = 16
  }
  createGrid(columns, columns)
}

//* Color the square inside GRID
const colorGrid = function (square) {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  if (active) {
    square.classList.remove('black')
    square.style.setProperty('background-color', `rgb(${r},${g},${b})`)
  } else {
    square.classList.add('black')
  }
}
function rgb() {
  activeLight.classList.toggle('green')
  active = !active
  console.log(active)
}
clearBtn.addEventListener('click', clearGrid)
rainbowBtn.addEventListener('click', rgb)
