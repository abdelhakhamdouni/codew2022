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



let textes = [
    "CRÉATEUR & concépteur DE SITE WEB",
    "CRÉATEUR d'application mobile",
    "maintenace & mise à jour de site WEB",
    "Audit SEO & référencement naturel",
]


let i = 0
let title = document.querySelector('.site-title')

setInterval(()=>{
    i++
    if(i==4) i = 0
    title.innerHTML = textes[i]
}, 5000)
if(document.querySelector('.range')){
    document.querySelector('.range').classList.add('animate')
}

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        document.querySelector('.navbar').classList.add('bg_dark')
    }
    else{
        document.querySelector('.navbar').classList.remove('bg_dark')
    }
})

let nameInput = document.querySelector('input[name="name"')

nameInput.addEventListener('blur', function(e){
    if( this.value.length == 0){
        this.classList.remove('valid')
        this.classList.remove('fail')
    }
    else if(this.value.length > 5){
        this.classList.add('valid')
        this.classList.remove('fail')
    }else{
        this.classList.remove('valid')
        this.classList.add('fail')
    }
})