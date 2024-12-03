const linknavs = document.querySelector(".btnmenu");
const linknavsX = document.querySelector(".btnmenux");
const panelnavs = document.querySelector(".navegation");


console.log(panelnavs.clientWidth );

linknavs.addEventListener("click", (click) => {
    panelnavs.classList.toggle('opennavs')
    linknavs.classList.toggle('navBotones')
        linknavsX.classList.remove('navBotones')
    });

linknavsX.addEventListener("click", (click) => {
    panelnavs.classList.remove('opennavs')
    linknavsX.classList.toggle('navBotones')
    linknavs.classList.remove('navBotones')
});


const linkmenu = document.querySelector(".clickmenu");
const panelmenu = document.querySelector(".submenu");
const icono = document.querySelector(".icomsubmenu");


console.log(panelnavs.clientWidth );

linkmenu.addEventListener("click", (click) => {
    if(panelmenu.clientHeight == 0){
        panelmenu.classList.toggle('openmenu')
        icono.style.transform= "rotateZ(0deg)"
    }else{
        panelmenu.classList.remove('openmenu')
        panelmenu.
        icono.style.transform= "rotateZ(90deg)"

    }
    });