let textes = [
    "CRÉATEUR & concépteur DE SITE WEB",
    "CRÉATEUR d'application mobile",
    "maintenace & refonte de site WEB",
    "Audit SEO & référencement naturel",
]

let i = 0
let title = document.querySelector('.site-title')

let form = document.querySelector('form')
let formElements = []

/**
 * On scroll
 */
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        document.querySelector('.navbar').classList.add('bg_dark')
    }
    else{
        document.querySelector('.navbar').classList.remove('bg_dark')
    }
})

/**
 * Toggle menu
 */
if(document.querySelector('#menu_icon')){
    document.querySelector('#menu_icon').addEventListener('click', e => {
        e.target.classList.toggle('icon-indent-decrease')
        e.target.classList.toggle('icon-indent-increase')
        if( document.querySelector('.menu') ){
            document.querySelector('.menu').classList.toggle('show')
            document.querySelector('.navbar').classList.toggle('show_menu')
        }
    })
}

/**
 * Change site title
 */
setInterval(()=>{
    i++
    if(i==4) i = 0
    title.innerHTML = textes[i]
}, 5000)

/**
 * Range animate
 */
if(document.querySelector('.range')){document.querySelector('.range').classList.add('animate')}

/**
 * Form Validate
 */
form.querySelectorAll('input').forEach( e => formElements.push(e) )
form.querySelector('input[type="checkbox"').addEventListener('input', function(){
    this.checked ? this.classList.add('valid') : this.classList.remove('valid')
    check_form() ? form.querySelector('button').removeAttribute('disabled') : null

})
form.querySelectorAll('input:not([type="checkbox"])').forEach( i => {
    i.addEventListener('focus', e => {
        let labelFor = e.target.getAttribute('name')
        let label = document.querySelector(`label[for=${labelFor}]`)
        label.classList.add('focusable')
    })
    i.addEventListener('input', function(e){
        handler(e, 5)
    })
})
form.querySelector('textarea').addEventListener('focus', e => {
        let labelFor = e.target.getAttribute('name')
        let label = document.querySelector(`label[for=${labelFor}]`)
        label.classList.add('focusable')
    })
form.querySelector('textarea').addEventListener('input', function(e){
    handler(e, 50)
})


function handler(event, number) {
    let labelFor = event.target.getAttribute('name')
    let label = document.querySelector(`label[for=${labelFor}]`)
    if( event.target.value.length == 0){
        label.classList.remove('focusable')
        event.target.classList.remove('valid')
        event.target.classList.remove('fail')
    }
    else if(event.target.value.length > number){
        label.classList.add('success')
        label.classList.remove('primary')
        event.target.classList.add('valid')
        event.target.classList.remove('fail')

    }else{
        label.classList.add('primary')
        label.classList.remove('success')
        event.target.classList.remove('valid')
        event.target.classList.add('fail')
    }
    
    check_form() ? form.querySelector('button').removeAttribute('disabled') : null
}


function check_form(){
    let valide = true
    formElements.forEach(e => {
        if( ! e.classList.contains("valid")){
            valide = false
        }
    })
    return valide
}

/**
 * carousel testimonial
 */

let testi_list = document.querySelector('.testimonials_list')
let steps = 0
let direction = true;
let testi_interval = sliding()

testi_list.addEventListener('mouseenter', e => {
    clearInterval(testi_interval)
})
testi_list.addEventListener('mouseleave', e => {
    testi_interval = sliding()
})

document.querySelectorAll(`.index`).forEach(ele => {
    ele.addEventListener('click', function(){
        let index = this.dataset.index
        clearInterval(testi_interval)
        testi_list.style.transform = `translateX(-${index * 20}%)`
        document.querySelectorAll('[id*="index_"').forEach(ele => ele.classList.remove('bg_primary'))
        document.querySelector(`#index_${index}`).classList.add('bg_primary')
        steps = index
        testi_interval = sliding()
    })
})

function sliding() {
    return setInterval(()=>{
        steps++ 
        if(steps == 5) steps = 0
        testi_list.style.transform = `translateX(-${steps * 20}%)`
        document.querySelectorAll('[id*="index_"').forEach(ele => ele.classList.remove('bg_primary'))
        document.querySelector(`#index_${steps}`).classList.add('bg_primary')
    }, 10000)
}