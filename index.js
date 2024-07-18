// alert("Hello!")

// for (var i=0;i<document.querySelectorAll("button").length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function (){
//         var t = this.innerHTML;
//         var audio;
//         if(t==="w"){
//             audio = new Audio("./sounds/tom-1.mp3");
//             audio.play();
//         }
//         else if(t==="a"){
//             audio = new Audio("./sounds/tom-2.mp3");
//             audio.play();
//         }
//         else if(t==="s"){
//             audio = new Audio("./sounds/tom-3.mp3");
//             audio.play();
//         }
//         else if(t==="d"){
//             audio = new Audio("./sounds/tom-4.mp3");
//             audio.play();
//         }
//         else if(t==="j"){
//             audio = new Audio("./sounds/snare.mp3");
//             audio.play();
//         }
//         else if(t==="k"){
//             audio = new Audio("./sounds/crash.mp3");
//             audio.play();
//         }
//         else{
//             audio = new Audio("./sounds/kick-bass.mp3");
//             audio.play();
//         }
//     })
// }


for (var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var t = this.innerHTML;
        makesound(t);
        buttonAnimation(t);
    })
}

document.addEventListener("keypress",function (event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){
        var audio;
        switch(key){
            case "w":
                audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                break;
        }
}


function buttonAnimation(c){
    var v = document.querySelector("."+c);
    v.classList.add("pressed");
    setTimeout(function (){
        v.classList.remove("pressed");
    },100);
}