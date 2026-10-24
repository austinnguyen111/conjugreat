const textDisplay = document.getElementById("textDisplay")
const answerFeedback = document.getElementById("answerFeedback")
let answer = ""
let answerFeedbackSentence = ""
const letters = "abcdefghijklmnopqrstuvwxyz"
let correctAnswer = ""
let correctnesses = []
let listOfLetters = []
let listOfUsed = []
for (let i = 0; i < 5; i++) {
  correctAnswer += letters[Math.floor(Math.random() * letters.length)].toUpperCase()
}
console.log(correctAnswer)
document.addEventListener("keydown", e => {
    if (e.key === "Backspace") {
            answer = answer.slice(0, -1)
    } 
    if (/^[a-zA-Z]$/.test(e.key) && answer.length <= 4) {
        answer += e.key.toUpperCase()
    }
    textDisplay.innerHTML = answer
    if (e.key === "Enter") {
        document.querySelectorAll(".feedback").forEach(el => el.remove())
        if (answer.length < 5) {
            const div = document.createElement("div")
            div.className = "feedback"
            div.textContent = "please enter 5 letters"
            document.body.appendChild(div)
        }
        else {
            for (let i = 0; i < 5; i++) {
                listOfLetters.push(correctAnswer[i])
                if (correctAnswer[i] === answer[i]) {
                    const div = document.createElement("div")
                    div.className = "feedback"
                    div.textContent = answer[i] + " is in the right spot "
                    document.body.appendChild(div)
                }
                else if (listOfLetters.includes(answer[i])) {
                    const div = document.createElement("div")
                    div.className = "feedback"
                    div.textContent = answer[i] + " is in the wrong spot "
                    document.body.appendChild(div)
                }
                if (!listOfUsed.includes(answer[i])) {
                listOfUsed.push(answer[i])
                }
            }
            listOfUsed.sort()
            console.log(listOfUsed)
            const div = document.createElement("div")
            div.className = "feedback"
            div.textContent = listOfUsed
            document.body.appendChild(div)
        }
        
        textDisplay.innerHTML = ""
        answer = ""
    }
})
