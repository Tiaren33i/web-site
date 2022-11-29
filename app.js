const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")
if(dino.classList !=("jump")){

function jump (){
    dino.classList.add("jump");
    setTimeout(function(){
        dino.classList.remove("jump");

    },300)
 }
}

let isAlive = setInterval(function(){
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
let dinoTop = parseInt (window.getComputedStyle (dino).getPropertyValue("top"));

if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140 ){
    alert("Game Over!")
}
},10)

document.addEventListener("keydown",function(event){
    
    jump();
})