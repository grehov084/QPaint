let burgerBtn, mobileContent, advantegesContent, advantegesItem;

burgerBtn = document.querySelector(".site-header-burger");
mobileContent = document.querySelector(".site-header-mobile");
advantegesContent = document.querySelector(".site-content-advantages");

burgerBtn.addEventListener("click", ()=>{
    if(!mobileContent.hasAttribute("style")){
        mobileContent.style.cssText = "transform: translate(0, 0);";
    }
    else{
        mobileContent.removeAttribute("style");
    }
});

/*
for(i=0; i<advantegesContent.childElementCount;){
    if(advantegesContent.children[i].getBoundingClientRect().top < 10){
        advantegesContent.children[i].style.cssText = "position: fixed; top: 0";
        i++;
    }
}
*/
