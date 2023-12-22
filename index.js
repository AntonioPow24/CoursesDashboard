const body=document.querySelector('body')
const sidebar=document.querySelector('.sidebar')
const toggle=document.querySelector('.toggle')
const searchBtn=document.querySelector('.search-box')
const modeSwitch=document.querySelector('.toggle-switch')
const modeText=document.querySelector('.mode-tex')

toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close')
})

searchBtn.addEventListener('click',()=>{
    sidebar.classList.remove('close')
})


modeSwitch.addEventListener('click',()=>{
    innerMode()
    body.classList.toggle('dark')

    
})

const innerMode =()=>{
    let mode = !body.classList.contains('dark')? 'Light Mode': 'Dark Mode'
    modeText.innerText = mode
}



let slideInner = document.querySelector('.shopping-cards-list')
let shopcards = document.querySelectorAll('.shop-card')
let index=1

console.log(shopcards.length);
setInterval(()=>{
    let percentage = index * -100
    slideInner.style.transform=`translateX(${percentage}%)`
    index++
    if(index > shopcards.length-1){
        index=0
    }

},5000)
