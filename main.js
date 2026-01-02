// console.log('merhaba')

// üzerinde çalışacak elementleri HTML den bulup 
// javascript e kendi verdiğimiz isimşerle tanıtıyoruz 
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close-btn')

// menu butonuna basınca menunun açılmasını sağlayan olay dinleyicisi
menuBtn.addEventListener('click', ()=>{
    navbar.classList.remove('hidden')
})

//  kapat butonuna basınca menunun kapanmasını sağlayan olay dinleyicisi

closeBtn.addEventListener('click', ()=>{
    navbar.classList.add('hidden')
})