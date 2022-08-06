const grid = document.getElementById('grid');
const rangeSlider = document.getElementById('rangeSlider')
const rangeText = document.getElementById('rangeText')
const resetBtn =   document.getElementById('reset') 
const colorBtn = document.getElementById('color')
const rainbowBtn = document.getElementById('rainbow')
const eraserBtn = document.getElementById('erase')
const currentColor = document.getElementById('input-color')
const DEFAULT_MODE = 'color'
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
let currentMode = DEFAULT_MODE
function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }

colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')

rangeSlider.addEventListener('click' , () => { rangeText.innerText=`${rangeSlider.value }x${rangeSlider.value }`
makeRows(rangeSlider.value);
})

function makeRows(rows) {
    grid.innerHTML =""
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', rows);
    for (c = 0; c < (rows * rows); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover' ,changeColor)
      cell.addEventListener('mousedown', changeColor)
      grid.appendChild(cell).className = "grid-item";
      
    };
  };
  
  makeRows(rangeSlider.value);


  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor.value
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }


function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }

  
  resetBtn.addEventListener('click', ()=>{
    makeRows(rangeSlider.value)
  })
//rainbow
//  #F45150
//  #F4B654
//  #F3F404
//  #2EF400
//  #00F4CB