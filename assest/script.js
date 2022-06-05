let moon = document.querySelector('.moon')
let modeContainer = document.querySelector('.mode-container')
let mode = document.querySelector('.mode')
let svgContainer = document.querySelector('.svgContainer')
mode.addEventListener('click' , (event)=>{
    moon.classList.toggle('sun')
    if(moon.classList.contains('fa-sun-o')){
        moon.classList.remove('fa-sun-o')
        moon.classList.add('fa-moon-o')
        svgContainer.classList.add('svglight')
        mode.value = false
    }else{
        moon.classList.add('fa-sun-o')
        moon.classList.remove('fa-moon-o')
        svgContainer.classList.remove('svglight')
       mode.value = true
    }
})