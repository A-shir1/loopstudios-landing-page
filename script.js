var hamIcon = document.querySelector(".hamburgerIcon");
var closeIcon = document.querySelector(".closeResp");

hamIcon.addEventListener("click", function(){
    hamIcon.classList.add("respInvisible");
    closeIcon.classList.remove("respInvisible");
});

closeIcon.addEventListener("click", function(){
    hamIcon.classList.remove("respInvisible");
    closeIcon.classList.add("respInvisible");
});