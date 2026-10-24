const pronouns = ["yo", "tú", "él", "ella", "usted", "nosotros", "vosotros", "ellos", "ellas", "ustedes"]
const erVerbs = [
  "comer",
  "beber",
  "aprender",
  "comprender",
  "correr",
  "vender",
  "deber",
  "romper",
  "responder",
  "esconder",
  "temer",
  "toser",
  "meter",
  "prometer",
  "sorprender",
  "ceder",
  "depender",
  "suceder"
]
const irVerbs = [
  "vivir",
  "escribir",
  "abrir",
  "decidir",
  "recibir",
  "subir",
  "asistir",
  "compartir",
  "describir",
  "existir",
  "insistir",
  "permitir",
  "cumplir",
  "discutir",
  "sufrir",
  "añadir",
  "definir",
  "unir",
  "imprimir",
  "dividir"
]
const arVerbs = [
  "hablar",
  "trabajar",
  "estudiar",
  "caminar",
  "esperar",
  "necesitar",
  "tomar",
  "comprar",
  "escuchar",
  "mirar",
  "ayudar",
  "llevar",
  "llamar",
  "cocinar",
  "cantar",
  "bailar",
  "viajar"
]

const presentErEndings = {
    yo: "o",
    tú: "es",
    él: "e",
    ella: "e",
    usted: "e",
    nosotros: "emos",
    vosotros: "éis",
    ellos: "en",
    ellas: "en",
    ustedes: "en"
}
const presentIrEndings = {
    yo: "o",
    tú: "es",
    él: "e",
    ella: "e",
    usted: "e",
    nosotros: "imos",
    vosotros: "ís",
    ellos: "en",
    ellas: "en",
    ustedes: "en"
}
const presentArEndings = {
    yo: "o",
    tú: "as",
    él: "a",
    ella: "a",
    usted: "a",
    nosotros: "amos",
    vosotros: "áis",
    ellos: "an",
    ellas: "an",
    ustedes: "an"
}

const futureErEndings = {
    yo: "é",
    tú: "ás",
    él: "á",
    ella: "á",
    usted: "á",
    nosotros: "emos",
    vosotros: "éis",
    ellos: "án",
    ellas: "án",
    ustedes: "án"
}
const futureIrEndings = futureErEndings
const futureArEndings = futureErEndings

const imperfectErEndings= {
    yo: "ía",
    tú: "ías",
    él: "ía",
    ella: "ía",
    usted: "ía",
    nosotros: "íamos",
    vosotros: "íais",
    ellos: "ían",
    ellas: "ían",
    ustedes: "ían"
}
const imperfectIrEndings = imperfectErEndings
const imperfectArEndings = {
    yo: "aba",
    tú: "abas",
    él: "aba",
    ella: "aba",
    usted: "aba",
    nosotros: "ábamos",
    vosotros: "abais",
    ellos: "aban",
    ellas: "aban",
    ustedes: "aban"
}

const conditionalErEndings = {
    yo: "ía",
    tú: "ías",
    él: "ía",
    ella: "ía",
    usted: "ía",
    nosotros: "íamos",
    vosotros: "íais",
    ellos: "ían",
    ellas: "ían",
    ustedes: "ían"
}
const conditionalIrEndings = conditionalErEndings
const conditionalArEndings = conditionalErEndings

const preteriteErEndings = {
    yo: "í",
    tú: "iste",
    él: "ió",
    ella: "ió",
    usted: "ió",
    nosotros: "imos",
    vosotros: "isteis",
    ellos: "ieron",
    ellas: "ieron",
    ustedes: "ieron"
}
const preteriteIrEndings = {
    yo: "í",
    tú: "iste",
    él: "ió",
    ella: "ió",
    usted: "ió",
    nosotros: "imos",
    vosotros: "isteis",
    ellos: "ieron",
    ellas: "ieron",
    ustedes: "ieron"
}
const preteriteArEndings = {
    yo: "é",
    tú: "aste",
    él: "ó",
    ella: "ó",
    usted: "ó",
    nosotros: "amos",
    vosotros: "asteis",
    ellos: "aron",
    ellas: "aron",
    ustedes: "aron"
}

const endingsTable = {
  er: {
    present: presentErEndings,
    future: futureErEndings,
    imperfect: imperfectErEndings,
    conditional: conditionalErEndings,
    preterite: preteriteErEndings,
  },
  ir: {
    present: presentIrEndings,
    future: futureIrEndings,
    imperfect: imperfectIrEndings,
    conditional: conditionalIrEndings,
    preterite: preteriteIrEndings
  },
  ar: {
    present: presentArEndings,
    future: futureArEndings,
    imperfect: imperfectArEndings,
    conditional: conditionalArEndings,
    preterite: preteriteArEndings
  }
}
const verbsTable = {
  er: erVerbs,
  ir: irVerbs,
  ar: arVerbs
}

const explanationEquivalent = {
  present: "presente",
  future: "futuro simple",
  preterite: "pretérito perfecto simple",
  conditional: "condicional",
  imperfect: "pretérito imperfecto"
}
const instructions = {
  ar: {
    present: "drop -ar from the infinitive to get the stem, then add endings: yo -o, tú -as, él/ella/usted -a, nosotros -amos, vosotros -áis, ellos/ellas/ustedes -an.",
    future: "keep the full infinitive as the stem, then add endings: yo -é, tú -ás, él/ella/usted -á, nosotros -emos, vosotros -éis, ellos/ellas/ustedes -án.",
    imperfect: "drop -ar from the infinitive to get the stem, then add endings: yo -aba, tú -abas, él/ella/usted -aba, nosotros -ábamos, vosotros -abais, ellos/ellas/ustedes -aban.",
    conditional: "keep the full infinitive as the stem, then add endings: yo -ía, tú -ías, él/ella/usted -ía, nosotros -íamos, vosotros -íais, ellos/ellas/ustedes -ían.",
    preterite: "drop -ar from the infinitive to get the stem, then add endings: yo -é, tú -aste, él/ella/usted -ó, nosotros -amos, vosotros -asteis, ellos/ellas/ustedes -aron."
  },
  er: {
    present: "drop -er from the infinitive to get the stem, then add endings: yo -o, tú -es, él/ella/usted -e, nosotros -emos, vosotros -éis, ellos/ellas/ustedes -en.",
    future: "keep the full infinitive as the stem, then add endings: yo -é, tú -ás, él/ella/usted -á, nosotros -emos, vosotros -éis, ellos/ellas/ustedes -án.",
    imperfect: "drop -er from the infinitive to get the stem, then add endings: yo -ía, tú -ías, él/ella/usted -ía, nosotros -íamos, vosotros -íais, ellos/ellas/ustedes -ían.",
    conditional: "keep the full infinitive as the stem, then add endings: yo -ía, tú -ías, él/ella/usted -ía, nosotros -íamos, vosotros -íais, ellos/ellas/ustedes -ían.",
    preterite: "drop -er from the infinitive to get the stem, then add endings: yo -í, tú -iste, él/ella/usted -ió, nosotros -imos, vosotros -isteis, ellos/ellas/ustedes -ieron."
  },
  ir: {
    present: "drop -ir from the infinitive to get the stem, then add endings: yo -o, tú -es, él/ella/usted -e, nosotros -imos, vosotros -ís, ellos/ellas/ustedes -en.",
    future: "keep the full infinitive as the stem, then add endings: yo -é, tú -ás, él/ella/usted -á, nosotros -emos, vosotros -éis, ellos/ellas/ustedes -án.",
    imperfect: "drop -ir from the infinitive to get the stem, then add endings: yo -ía, tú -ías, él/ella/usted -ía, nosotros -íamos, vosotros -íais, ellos/ellas/ustedes -ían.",
    conditional: "keep the full infinitive as the stem, then add endings: yo -ía, tú -ías, él/ella/usted -ía, nosotros -íamos, vosotros -íais, ellos/ellas/ustedes -ían.",
    preterite: "drop -ir from the infinitive to get the stem, then add endings: yo -í, tú -iste, él/ella/usted -ió, nosotros -imos, vosotros -isteis, ellos/ellas/ustedes -ieron."
  }
}
const sentenceDisplay = document.getElementById("sentencedisplay")
const answerInput = document.getElementById("answerbox")
const correctDisplay = document.getElementById("correctdisplay")
const counterDisplay = document.getElementById("counterdisplay")
const correctCounterDisplay = document.getElementById("correctcounterdisplay")

const erBtn = document.getElementById("erbtn")
const irBtn = document.getElementById("irbtn")
const arBtn = document.getElementById("arbtn")
const presentBtn = document.getElementById("presentbtn")
const preteriteBtn = document.getElementById("preteritebtn")
const imperfectBtn = document.getElementById("imperfectbtn")
const conditionalBtn = document.getElementById("conditionalbtn")
const futureBtn = document.getElementById("futurebtn")
const verbButton = document.querySelectorAll(".verbbtn")
const tenseButton = document.querySelectorAll(".tensebtn")

const correctPercent = document.getElementById("correctPercent")
const correctSound = new Audio("correct.wav")
const incorrectSound = new Audio("incorrect.wav")
const muteBtn = document.getElementById("mutebtn")
const hideTableBtn = document.getElementById("hidetablebtn")
const accentButtons = document.getElementById("accentbuttons")
const explainBtn = document.getElementById("explainbtn")
const explanationWindow = document.getElementById("explanationwindow")
const overlay = document.getElementById("overlay")
const presentCounter = document.getElementById("presentcounter")
const preteriteCounter = document.getElementById("preteritecounter")
const imperfectCounter = document.getElementById("imperfectcounter")
const conditionalCounter = document.getElementById("conditionalcounter")
const futureCounter = document.getElementById("futurecounter")
let specificCounter = "presentCount"
const tenseCounts = {
  presentCount: 0,
  preteriteCount: 0,
  imperfectCount: 0,
  conditionalCount: 0,
  futureCount: 0
}
for (const key in tenseCounts) {
  tenseCounts[key] = parseInt(localStorage.getItem("es_" + key)) || 0
}
let correctCounter = 0
let counter = 0
correctPercent.innerHTML = (counter === 0 ? 0 : Math.round((correctCounter / counter) * 100)) + "%"
counterDisplay.innerHTML = counter
correctCounterDisplay.innerHTML = correctCounter
presentCounter.innerHTML = tenseCounts["presentCount"]
preteriteCounter.innerHTML = tenseCounts["preteriteCount"]
imperfectCounter.innerHTML = tenseCounts["imperfectCount"]
conditionalCounter.innerHTML = tenseCounts["conditionalCount"]
futureCounter.innerHTML = tenseCounts["futureCount"]
let currentVerbType = "er"
let currentTense = "present"
let correctAnswer = ""
let typeOfVerb = erVerbs
let selectedEnding = presentErEndings
function updateEndingsDisplay() {
  document.getElementById("yoending").innerHTML = selectedEnding["yo"]
  document.getElementById("tuending").innerHTML = selectedEnding["tú"]
  document.getElementById("elending").innerHTML = selectedEnding["él"]
  document.getElementById("ellaending").innerHTML = selectedEnding["ella"]
  document.getElementById("ustedending").innerHTML = selectedEnding["usted"]
  document.getElementById("nosotrosending").innerHTML = selectedEnding["nosotros"]
  document.getElementById("vosotrosending").innerHTML = selectedEnding["vosotros"]
  document.getElementById("ellosending").innerHTML = selectedEnding["ellos"]
  document.getElementById("ellasending").innerHTML = selectedEnding["ellas"]
document.getElementById("ustedesending").innerHTML = selectedEnding["ustedes"]
}
updateEndingsDisplay()
let muted = false
let lastWrongAnswer = ""
erBtn.classList.add("selected")
presentBtn.classList.add("selected")
function toggleButtons(group) {
    group.forEach(button => {
    button.addEventListener("click", () => {
        group.forEach(btn => btn.classList.remove("selected"))
        button.classList.add("selected")
    })
    })
}
muteBtn.addEventListener("click", () => {
  muted = !muted
  incorrectSound.volume = muted ? 0 : 1
  correctSound.volume = muted ? 0 : 1
  muteBtn.classList.toggle("selected", muted)
})
hideTableBtn.addEventListener("click", () => {
  document.getElementById("table").classList.toggle("hide")
})
toggleButtons(tenseButton)
toggleButtons(verbButton)

erBtn.addEventListener("click", () => {
  currentVerbType = "er"
  updateSelection()
  newQuestion()
})
irBtn.addEventListener("click", () => {
  currentVerbType = "ir"
  updateSelection()
  newQuestion()
})
arBtn.addEventListener("click", () => {
  currentVerbType = "ar"
  updateSelection()
  newQuestion()
})

function updateSelection() {
  typeOfVerb = verbsTable[currentVerbType]
  selectedEnding = endingsTable[currentVerbType][currentTense]
  updateEndingsDisplay()
}

presentBtn.addEventListener("click", () => {
  currentTense = "present"
  specificCounter = "presentCount"
  updateSelection()
  newQuestion()
})
preteriteBtn.addEventListener("click", () => {
  currentTense = "preterite"
  specificCounter = "preteriteCount"
  updateSelection()
  newQuestion()
})
imperfectBtn.addEventListener("click", () => {
  currentTense = "imperfect"
  specificCounter = "imperfectCount"
  updateSelection()
  newQuestion()
})
conditionalBtn.addEventListener("click", () => {
  currentTense = "conditional"
  specificCounter = "conditionalCount"
  updateSelection()
  newQuestion()
})
futureBtn.addEventListener("click", () => {
  currentTense = "future"
  specificCounter = "futureCount"
  updateSelection()
  newQuestion()
})

accentButtons.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return
  const accent = e.target.textContent
  const start = answerInput.selectionStart
  const end = answerInput.selectionEnd
  answerInput.value =
  answerInput.value.slice(0, start) + accent + answerInput.value.slice(end)
  answerInput.focus()
  answerInput.selectionStart = answerInput.selectionEnd = start + accent.length
})



function newQuestion() {
    let randomVerb = typeOfVerb[Math.floor(Math.random() * typeOfVerb.length)]
    let randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)]
    let stem = (currentTense === "future" || currentTense === "conditional") ? randomVerb : randomVerb.slice(0, -2)
    correctAnswer = stem + selectedEnding[randomPronoun]
    let sentence = randomPronoun + " " + randomVerb
    sentenceDisplay.innerHTML = sentence
    answerInput.value = ""
}

newQuestion()

answerInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (answerInput.value == "") {
            correctDisplay.classList.remove("fadeout")
            correctDisplay.innerHTML = "Please enter your answer."
            return
        }

        explainBtn.classList.add("hide")
        explanationWindow.classList.remove("popin")

        let answer = answerInput.value
        if (answer.trim() == correctAnswer) {
            correctCounter += 1
            tenseCounts[specificCounter] += 1
            localStorage.setItem("es_" + specificCounter, tenseCounts[specificCounter])
            correctDisplay.innerHTML = "Correct!"
            correctCounterDisplay.innerHTML = correctCounter

            correctSound.currentTime = 0
            correctSound.play()

            correctDisplay.classList.remove("fadeout")
            void correctDisplay.offsetWidth
            correctDisplay.classList.add("fadeout")
            explanationWindow.classList.add("hide")
        } 
        else {
            correctDisplay.classList.remove("fadeout")
            correctDisplay.innerHTML = "Incorrect, the answer was " + correctAnswer
            lastWrongAnswer = correctAnswer
            explainBtn.classList.remove("hide")
            explanationWindow.classList.add("hide")

            incorrectSound.currentTime = 0
            incorrectSound.play()

            explainBtn.onclick = () => {
              explainBtn.classList.add("hide")
              explanationWindow.classList.remove("hide")
              explanationWindow.classList.add("popin")
              overlay.classList.remove("hide")
              explanationWindow.innerHTML = `You entered "${answer}." The correct answer was "${lastWrongAnswer}."` +
                ` To conjugate -${currentVerbType} verbs in the ${explanationEquivalent[currentTense]}, you must ${instructions[currentVerbType][currentTense]}` +
                `<div><button id="okbtn">ok</button></div>`
              document.getElementById("okbtn").onclick = () => {
                explanationWindow.classList.add("hide")
                overlay.classList.add("hide")
              }
            }
        }
        
        newQuestion()
      
        counter += 1
        presentCounter.innerHTML = tenseCounts["presentCount"]
        preteriteCounter.innerHTML = tenseCounts["preteriteCount"]
        imperfectCounter.innerHTML = tenseCounts["imperfectCount"]
        conditionalCounter.innerHTML = tenseCounts["conditionalCount"]
        futureCounter.innerHTML = tenseCounts["futureCount"]
        counterDisplay.innerHTML = counter
        correctPercent.innerHTML = (counter === 0 ? 0 : Math.round((correctCounter / counter) * 100)) + "%"
    }
})


