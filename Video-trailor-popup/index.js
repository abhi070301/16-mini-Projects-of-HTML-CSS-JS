const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".closeicon");
const trailorContainerEl = document.querySelector(".trailor-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click",()=>{
    trailorContainerEl.classList.remove("active");
});
closeIconEl.addEventListener("click", ()=>{
    trailorContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0; 
});