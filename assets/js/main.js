let burgerBtn, mobileContent;

burgerBtn = document.querySelector(".site-header-burger");
mobileContent = document.querySelector(".site-header-mobile");
burgerBtn.addEventListener("click", ()=>{
    if(!mobileContent.hasAttribute("style")){
        mobileContent.style.cssText = "transform: translate(0, 0);";
    }
    else{
        mobileContent.removeAttribute("style");
    }

});