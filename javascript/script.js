const title=document.getElementById("title");
const typewriter=new Typewriter(title, {
    loop:true,
    deley:100,
    deleteSpeed: 1000,
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
