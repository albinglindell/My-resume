const hamburgerBtn = document.querySelector(".hamburger-container")
const logoContainer= document.querySelector(".logo-container")
const overlay= document.querySelector(".dark-layer")
const line1= document.querySelector(".line1")
const line2= document.querySelector(".line2")
const line3= document.querySelector(".line3")

let toggle= 0

hamburgerBtn.addEventListener("click", ()=>{
    if (toggle===0){
        toggle=1
        logoContainer.style.transform="translateX(-34%)"
        logoContainer.style.zIndex="20"
        logoContainer.style.transition="ease-in .5s" 
    
    line1.style.transform="rotate(45deg)"
    line2.style.display="none"
    line3.style.transform="rotate(-45deg)"

    }else if(toggle===1){
        toggle=0
        logoContainer.style.transform="translateX(150%)"
        logoContainer.style.transition="ease-in .3s" 
        
        line1.style.transform="rotate(-45deg)"
        line2.style.display="block"
        line3.style.transform="rotate(45deg)"

    }
})