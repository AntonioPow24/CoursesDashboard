
const body=document.querySelector('body')
const sidebar=document.querySelector('.sidebar')
const toggle=document.querySelector('.toggle')
const searchBtn=document.querySelector('.search-box')
const modeSwitch=document.querySelector('.toggle-switch')
const modeText=document.querySelector('.mode-tex')



// toggle SideBar
toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close')
})


searchBtn.addEventListener('click',()=>{
    sidebar.classList.remove('close')
})

// Dark and light Mode
modeSwitch.addEventListener('click',()=>{
    innerMode()
    body.classList.toggle('dark')

    
})


// InnerText , mode span
const innerMode =()=>{
    let mode = !body.classList.contains('dark')? 'Light Mode': 'Dark Mode'
    modeText.innerText = mode
}



// Slider cards- shop-module
let slideInner = document.querySelector('.shopping-cards-list')
let shopcards = document.querySelectorAll('.shop-card')
let index=1

setInterval(()=>{
    let percentage = index * -100
    slideInner.style.transform=`translateX(${percentage}%)`
    index++
    if(index > shopcards.length-1){
        index=0
    }

},5000)








// =============== SECTION CHANGE ===============

const menuBar=document.querySelector('.menu-bar')
let newDataSection=menuBar.querySelector('#menu-links li.nav-link-active a').dataset.section

loadCurrentSection=(newSection=newDataSection)=>{

    
    body.querySelector(`.${newSection}`).classList.remove('module-disable')
    body.querySelector(`.${newSection}`).classList.add('module-active')
}


// evento cambiar Seccion
menuBar.addEventListener('click',(e)=>{

    const newSection= e.target.closest('.nav-link')
    const activeSection= menuBar.querySelector('#menu-links li.nav-link-active')
    if(newSection && newSection!==activeSection){
        // Quitarle el -active a la seccion activa
        activeSection.classList.remove('nav-link-active')

        // Agregarle -active a la seccion nueva
        newSection.classList.add('nav-link-active')

        // Obterner el data-section de la nyeva Seccion
        newDataSection = newSection.querySelector('a').dataset.section
        body.querySelector(`.${activeSection.querySelector('a').dataset.section}`).classList.remove('module-active')

        body.querySelector(`.${activeSection.querySelector('a').dataset.section}`).classList.add('module-disable')
        loadCurrentSection(newDataSection)
    }
})




