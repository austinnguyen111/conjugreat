const image = document.getElementById("image")
const sound = new Audio("light switch sound.mp3")
const overlay = document.getElementById("overlay")
let buttonStatus = "off"

function toggle() {
    buttonStatus = buttonStatus === "off" ? "on" : "off"
    if (buttonStatus === "off") {
        image.src = "light switch off.jpg"
        overlay.classList.remove("hide")
    }
    else {
        image.src = "light switch on.jpg"
        overlay.classList.add("hide")
    }
    sound.currentTime = 0
    sound.play()
}
image.addEventListener('click', toggle)