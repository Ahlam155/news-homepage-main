let menu = document.getElementById("menu")
let clsIcon = document.getElementById("close")
let main_links = document.getElementById("main-links")
let cover =document.getElementById("cover")
menu.addEventListener("click",_=>{
main_links.style.display="flex";
clsIcon.style.display="block";
menu.style.display="none";
cover.style.display="block"
cover.style.backgroundColor="rgb(0 0 0 / 33%)"

})

clsIcon.addEventListener("click",_=>{
    main_links.style.display="none";
    clsIcon.style.display="none";
    menu.style.display="block";
    cover.style.display="none"

    })