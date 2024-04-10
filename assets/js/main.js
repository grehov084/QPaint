let burgerBtn, phoneInput, mobileContent, advantegesContent, advantegesItem, header, technology, properties, certs, technologyButton, propertiesButton, certsButton, technologyButtonMob, propertiesButtonMob, certsButtonMob, technologyButtonFooter, propertiesButtonFooter, certsButtonFooter, siteUp;

burgerBtn = document.querySelector(".site-header-burger");
mobileContent = document.querySelector(".site-header-mobile");
header = document.querySelector(".site-header");

technology = document.querySelector(".potential");
properties = document.querySelector(".advanteges");
certs = document.querySelector(".site-main-certs");

technologyButton = document.querySelector(".site-header-menu__item--technology");
propertiesButton = document.querySelector(".site-header-menu__item--prop");
certsButton = document.querySelector(".site-header-menu__item--certs");

technologyButtonMob = document.querySelector(".site-header-menu-mobile__item--technology");
propertiesButtonMob = document.querySelector(".site-header-menu-mobile__item--prop");
certsButtonMob = document.querySelector(".site-header-menu-mobile__item--certs");

technologyButtonFooter = document.querySelector(".site-footer-menu__item--technology");
propertiesButtonFooter = document.querySelector(".site-footer-menu__item--prop");
certsButtonFooter = document.querySelector(".site-footer-menu__item--certs");

siteUp = document.querySelector(".site-up");

phoneInput = document.querySelector(".site-main-callback__input--tel");

siteUp.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
});

technologyButton.addEventListener("click", ()=>{
    technology.scrollIntoView();
});
propertiesButton.addEventListener("click", ()=>{
    properties.scrollIntoView();
});
certsButton.addEventListener("click", ()=>{
    certs.scrollIntoView();
});

technologyButtonMob.addEventListener("click", ()=>{
    technology.scrollIntoView();
});
propertiesButtonMob.addEventListener("click", ()=>{
    properties.scrollIntoView();
});
certsButtonMob.addEventListener("click", ()=>{
    certs.scrollIntoView();
});

technologyButtonFooter.addEventListener("click", ()=>{
    technology.scrollIntoView();
});
propertiesButtonFooter.addEventListener("click", ()=>{
    properties.scrollIntoView();
});
certsButtonFooter.addEventListener("click", ()=>{
    certs.scrollIntoView();
});

burgerBtn.addEventListener("click", ()=>{
    if(!mobileContent.hasAttribute("style")){
        mobileContent.style.cssText = "transform: translate(0, 0);";
    }
    else{
        mobileContent.removeAttribute("style");
    }
});

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 0){
        header.style.cssText = "box-shadow: 1px 1px 5px #797979";
        siteUp.style.display = "block";
        siteUp.style.transition = `opacity 500ms`;
        setTimeout(() => {
            siteUp.style.opacity = 1;
        }, 200);
    }
    else if(window.pageYOffset == 0){
        header.removeAttribute("style");
        setTimeout(() => {
            siteUp.style.opacity = 0;
        }, 200);
        setTimeout(()=>{
            siteUp.removeAttribute("style");
        }, 350);
    }
});
$("a.site-main-certs__img").fancybox({});

const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
    placeholderChar: 'X',
    placeholder:{
        show: 'always'
    }
  });