var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
  character.classList.add("animation");
  setTimeout(function () {
    character.classList.remove("animation");
  }, 300);
}

var checkDead = setInterval(function() {
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    if(blockLeft<20 && blockLeft>-20 && characterTop>=130)
    {
        block.style.animation = "none";
        alert("Game Over! Score:" + Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML =Math.floor(counter/100);
    }
}, 10);
