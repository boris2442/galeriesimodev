const title=document.getElementById("title");
const typewriter=new Typewriter(title, {
    loop:true,
    deley:10,
    deleteSpeed: 50,
});

typewriter.typeString("Bienvenue dans le monde simodev & infinity!")
.pauseFor(2000)

.deleteAll()

.start();

// var title2 = document.getElementById('app');

// var typewriter2 = new Typewriter(app, {

//     deley:300,
//     loop:true
// });

// typewriter2.typeString('Hello World!')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Strings can be removed')
//     .pauseFor(2500)
//     .deleteChars(7)
//     .typeString('<strong>altered!</strong>')
//     .pauseFor(2500)
//     .start();

const bar=document.querySelector(".bar");
const navigation=document.querySelector("header ul");
const tata=document.querySelector(".tat");
const closeIcon=document.querySelector(".closeIcon")

bar.addEventListener("click", ()=>{
    navigation.classList.add("scrool")
  bar.style.display = 'none';

    closeIcon.style.display = 'block';

})
closeIcon.addEventListener("click", ()=>{
    navigation.classList.remove("scrool")
    closeIcon.style.display = 'none';
  
    bar.style.display = 'block';

})

  
window.addEventListener("scroll", ()=>{
    navigation.classList.remove("scrool")
    
})


// librairie scrollReveal.js

const sr=ScrollReveal({
    distance:"30px",
    origin:"top",
    reset:true,
    duration:1500
});
sr.reveal(".formulaire, .first-section, .second-section, .third-section, .fourth-section, .fifth-section, .sixth-section, .seven-section, .eight-section, .night-section, .tenth-section ", {
    interval:200
});


// chargement de la ppage

window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').style.transition='5s ease-out'
  };