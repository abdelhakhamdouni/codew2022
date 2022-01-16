if(document.querySelector('#menu_icon')){
    document.querySelector('#menu_icon').addEventListener('click', e => {
        e.target.classList.toggle('icon-indent-decrease')
        e.target.classList.toggle('icon-indent-increase')
        if( document.querySelector('.menu') ){
            document.querySelector('.menu').classList.toggle('show')
        }
    })
}



let textes = [
    "CRÉATEUR, concépteur DE SITE WEB",
    "CRÉATEUR d'application mobile",
    "maintenace et mise à jour WEB",
    "Audit SEO et référencement naturel",
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