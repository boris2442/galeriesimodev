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

//     deley:100,
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