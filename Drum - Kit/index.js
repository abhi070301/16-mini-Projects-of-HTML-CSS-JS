const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container")
kits.forEach(kit=>{
    const btnEl = document.createElement("button");
    btnEl.style.backgroundImage = "url(images/"+ kit + ".png)";
    containerEl.appendChild(btnEl);
    btnEl.classList.add("btn");
    btnEl.innerText = kit;

    const audioEl = document.createElement("audio");
    audioEl.src = "sound/" + kit + ".mp3";
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", ()=>{
        audioEl.play();
    });
    window.addEventListener("keydown",(event)=>{
        if(event.key == kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(0.9)"
            setTimeout(()=>{
btnEl.style.transform = "scale(1)"
            },100);
        }
    });
});
