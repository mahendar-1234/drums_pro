
var drumSize = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumSize; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var innerhtml = this.innerHTML;

        makeSound(innerhtml);
        animationSou(innerhtml);

    });
}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    animationSou(event.key);

});

function animationSou(actie){
    var activeBtn = document.querySelector("."+actie);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },50);
}
function makeSound(key) {

    switch (key) {

        case "w":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;

        case "d":
            var tom = new Audio("tom-1.mp3");
            tom.play();
            break;

        case "j":
            var tom = new Audio("tom-2.mp3");
            tom.play();
            break;

        case "k":
            var tom = new Audio("tom-3.mp3");
            tom.play();
            break;

        case "l":
            var tom = new Audio("tom-4.mp3");
            tom.play();
            break;

        default:
            break;
    }

}


