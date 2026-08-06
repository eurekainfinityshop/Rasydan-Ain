// ====================================
// WALIMATUL URUS E-CARD
// Nurul Ain & Abdul Rasydan
// ====================================

// ======= ELEMENT =======
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const openBtn = document.getElementById("open");
const music = document.getElementById("music");

// ======= SETTING =======
music.volume = 0.4;

// ======= BUKA JEMPUTAN =======
openBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        content.style.display = "block";

        document.body.style.overflowY = "auto";

        music.play();

        window.scrollTo({
            top: 0,
            behavior: "smooth…
// ====================================
// POPUP QR DUITNOW
// ====================================

const giftButton = document.getElementById("giftButton");
const giftPopup = document.getElementById("giftPopup");
const closePopup = document.getElementById("closePopup");

if(giftButton){

giftButton.addEventListener("click",()=>{

giftPopup.style.display="block";

});

}

if(closePopup){

closePopup.addEventListener("click",()=>{

giftPopup.style.display="none";

});

}

window.addEventListener("click",(e)=>{

if(e.target===giftPopup){

giftPopup.style.display="none";

}

});

// ====================================
// BUNGA JATUH
// ====================================

const flowers=["🌸","🌺","🌼","🍃","🤍"];

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=
flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=
(18+Math.random()*18)+"px";

flower.style.animationDuration=
(6+Math.random()*5)+"s";

flower.style.opacity=Math.random();

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},11000);

}

setInterval(createFlower,600);

// ====================================
// BACK TO TOP
// ====================================

const topButton=document.createElement("button");

topButton.className="topButton";

topButton.innerHTML="⬆️";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ====================================
// ANIMASI SCROLL
// ====================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// ====================================
// LOADING SCREEN
// ====================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },800);

        },1800);

    }

});


// ====================================
// NAMA TETAMU DARI URL
// Contoh:
// index.html?guest=Ali%20Bin%20Abu
// ====================================

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

const guestName = document.getElementById("guestName");

if(guest && guestName){

    guestName.innerHTML = decodeURIComponent(guest);

}


// ====================================
// ANIMASI KAD
// ====================================

document.querySelectorAll(".card").forEach((card,index)=>{

    card.style.animationDelay = (index*0.2)+"s";

});


// ====================================
// UCAPAN SELAMAT DATANG
// ====================================

console.log("Selamat Datang ke Majlis Walimatul Urus");


// ====================================
// PRELOAD GAMBAR
// ====================================

const preload = [

"images/background.jpg",

"images/duitnow.png"

];

preload.forEach(img=>{

const image = new Image();

image.src = img;

});


// ====================================
// PAPARAN TARIKH
// ====================================

const eventDate = new Date("2026-08-29T11:00:00");

console.log(eventDate);


// ====================================
// AKHIR SCRIPT
// ====================================