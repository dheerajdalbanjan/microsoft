
var click = "notexpanded" ;

document.querySelector(".hamburger").addEventListener("click" , function (){
    ;
    setTimeout(function (){
        document.querySelector(".first").classList.toggle("-rotate-45");
        document.querySelector(".first").classList.toggle("absolute");
        document.querySelector(".second").classList.toggle("hidden");
        document.querySelector(".third").classList.toggle("rotate-45");
        document.querySelector(".class").classList.toggle("translate-x-0")
    },100)
    
})
