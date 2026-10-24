const pronouns = ["je/j'", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"]
const erVerbs = [
  "parler",
  "aimer",
  "donner",
  "penser",
  "trouver",
  "demander",
  "regarder",
  "aider",
  "chercher",
  "passer",
  "jouer",
  "porter",
  "montrer",
  "travailler",
  "chanter",
  { value: "monter", tag: "etreAuxilliary"},
  { value: "rester", tag: "etreAuxilliary"},
  { value: "entrer", tag: "etreAuxilliary"},
  { value: "rentrer", tag: "etreAuxilliary"},
  { value: "tomber", tag: "etreAuxilliary"},
  { value: "retourner", tag: "etreAuxilliary"},
  { value: "arriver", tag: "etreAuxilliary"}
]
const irVerbs = [
  "finir",
  "choisir",
  "réussir",
  "grandir",
  "grossir",
  "maigrir",
  "rougir",
  "vieillir",
  "remplir",
  "réfléchir",
  "obéir",
  "punir",
  "bâtir",
  "guérir",
  "nourrir",
  "saisir",
  "agir",
  "réagir",
  "établir",
  "avertir",
  { value: "devenir", tag: "etreAuxilliary"},
  { value: "revenir", tag: "etreAuxilliary"},
  { value: "sortir", tag: "etreAuxilliary"},
  { value: "partir", tag: "etreAuxilliary"}
]
const reVerbs = [
  "vendre",
  "attendre",
  "répondre",
  "entendre",
  "perdre",
  "rendre",
  "défendre",
  "tondre",
  "confondre",
  "correspondre",
  "fondre",
  "mordre",
  "pendre",
  "prétendre",
  "tordre",
  { value: "naître", tag: "etreAuxilliary"},
  { value: "descendre", tag: "etreAuxilliary"}
]

const presentErEndings = {
    "je/j'": "e",
    tu: "es",
    il: "e",
    elle: "e",
    on: "e",
    nous: "ons",
    vous: "ez",
    ils: "ent",
    elles: "ent"
}
const presentIrEndings = {
    "je/j'": "is",
    tu: "is",
    il: "it",
    elle: "it",
    on: "it",
    nous: "issons",
    vous: "issez",
    ils: "issent",
    elles: "issent"
}
const presentReEndings = {
    "je/j'": "s",
    tu: "s",
    il: "",
    elle: "",
    on: "",
    nous: "ons",
    vous: "ez",
    ils: "ent",
    elles: "ent"
}
const presentIrregularEndings = {

}

const futureErEndings = {
    "je/j'": "ai",
    tu: "as",
    il: "a",
    elle: "a",
    on: "a",
    nous: "ons",
    vous: "ez",
    ils: "ont",
    elles: "ont"
}
const futureIrEndings = futureErEndings
const futureReEndings = futureErEndings

const imperfectErEndings= {
    "je/j'": "ais",
    tu: "ais",
    il: "ait",
    elle: "ait",
    on: "ait",
    nous: "ions",
    vous: "iez",
    ils: "aient",
    elles: "aient"
}
const imperfectIrEndings = {
    "je/j'": "issais",
    tu: "issais",
    il: "issait",
    elle: "issait",
    on: "issait",
    nous: "issions",
    vous: "issiez",
    ils: "issaient",
    elles: "issaient"
}
const imperfectReEndings = {
    "je/j'": "ais",
    tu: "ais",
    il: "ait",
    elle: "ait",
    on: "ait",
    nous: "ions",
    vous: "iez",
    ils: "aient",
    elles: "aient"
}

const avoir = {
  "je/j'": "ai",
  tu: "as",
  il: "a",
  elle: "a",
  on: "a",
  nous: "avons",
  vous: "avez",
  ils: "ont",
  elles: "ont"
}
const etre = {
  "je/j'": "suis",
  tu: "es",
  il: "est",
  elle: "est",
  on: "est",
  nous: "sommes",
  vous: "êtes",
  ils: "sont",
  elles: "sont"
}
const aller = {
  "je/j'": "vais",
  tu: "vas",
  il: "va",
  elle: "va",
  on: "va",
  nous: "allons",
  vous: "allez",
  ils: "vont",
  elles: "vont"
}

const compoundPastErEndings = {
    "je/j'": "é",
    tu: "é",
    il: "é",
    elle: "é",
    on: "é",
    nous: "é",
    vous: "é",
    ils: "é",
    elles: "é"
}
const compoundPastIrEndings = {
    "je/j'": "i",
    tu: "i",
    il: "i",
    elle: "i",
    on: "i",
    nous: "i",
    vous: "i",
    ils: "i",
    elles: "i"
}
const compoundPastReEndings = {
    "je/j'": "u",
    tu: "u",
    il: "u",
    elle: "u",
    on: "u",
    nous: "u",
    vous: "u",
    ils: "u",
    elles: "u"
}

const conditionalErEndings = {
    "je/j'": "ais",
    tu: "ais",
    il: "ait",
    elle: "ait",
    on: "ait",
    nous: "ions",
    vous: "iez",
    ils: "aient",
    elles: "aient"
}
const conditionalIrEndings = {
  "je/j'": "ais",
    tu: "ais",
    il: "ait",
    elle: "ait",
    on: "ait",
    nous: "ions",
    vous: "iez",
    ils: "aient",
    elles: "aient"
}
const conditionalReEndings = {
    "je/j'": "ais",
    tu: "ais",
    il: "ait",
    elle: "ait",
    on: "ait",
    nous: "ions",
    vous: "iez",
    ils: "aient",
    elles: "aient"
}

const nearFutureErEndings = {
  "je/j'": "er",
    tu: "er",
    il: "er",
    elle: "er",
    on: "er",
    nous: "er",
    vous: "er",
    ils: "er",
    elles: "er"
}
const nearFutureIrEndings = {
    "je/j'": "ir",
    tu: "ir",
    il: "ir",
    elle: "ir",
    on: "ir",
    nous: "ir",
    vous: "ir",
    ils: "ir",
    elles: "ir"
}
const nearFutureReEndings = {
    "je/j'": "re",
    tu: "re",
    il: "re",
    elle: "re",
    on: "re",
    nous: "re",
    vous: "re",
    ils: "re",
    elles: "re"
}

const pastHistoricErEndings = {
    "je/j'": "ai",
    tu: "as",
    il: "a",
    elle: "a",
    on: "a",
    nous: "âmes",
    vous: "âtes",
    ils: "èrent",
    elles: "èrent"
}
const pastHistoricIrEndings = {
    "je/j'": "is",
    tu: "is",
    il: "it",
    elle: "it",
    on: "it",
    nous: "imes",
    vous: "ites",
    ils: "irent",
    elles: "irent"
}
const pastHistoricReEndings = pastHistoricIrEndings

const presentSubErEndings = {
    "je/j'": "e",
    tu: "es",
    il: "e",
    elle: "e",
    on: "e",
    nous: "ions",
    vous: "iez",
    ils: "ent",
    elles: "ent"
}
const presentSubIrEndings = presentSubErEndings
const presentSubReEndings = presentSubIrEndings

const avoirhv = {
  "je/j'": "avais",
  tu: "avais",
  il: "avait",
  elle: "avait",
  on: "avait",
  nous: "avions",
  vous: "aviez",
  ils: "avaient",
  elles: "avaient"
}
const etrehv = {
  "je/j'": "étais",
  tu: "étais",
  il: "était",
  elle: "était",
  on: "était",
  nous: "étions",
  vous: "étiez",
  ils: "étaient",
  elles: "étaient"
}
let helpingVerb = avoirhv
let pastPerfectErEndings
let pastPerfectIrEndings
let pastPerfectReEndings
const endingsTable = {
  er: {
    present: presentErEndings,
    future: futureErEndings,
    imperfect: imperfectErEndings,
    compoundPast: compoundPastErEndings,
    conditional: conditionalErEndings,
    nearFuture: nearFutureErEndings,
    pastHistoric: pastHistoricErEndings,
    pastPerfect: pastPerfectErEndings,
    presentSub: presentSubErEndings
  },
  ir: {
    present: presentIrEndings,
    future: futureIrEndings,
    imperfect: imperfectIrEndings,
    compoundPast: compoundPastIrEndings,
    conditional: conditionalIrEndings,
    nearFuture: nearFutureIrEndings,
    pastHistoric: pastHistoricIrEndings,
    pastPerfect: pastPerfectIrEndings,
    presentSub: presentSubIrEndings
  },
  re: {
    present: presentReEndings,
    future: futureReEndings,
    imperfect: imperfectReEndings,
    compoundPast: compoundPastReEndings,
    conditional: conditionalReEndings,
    nearFuture: nearFutureReEndings,
    pastHistoric: pastHistoricReEndings,
    pastPerfect: pastPerfectReEndings,
    presentSub: presentSubReEndings
  }
}
const verbsTable = {
  er: erVerbs,
  ir: irVerbs,
  re: reVerbs,
}
const explanationEquivalent = {
  present: "présent",
  future: "futur simple",
  compoundPast: "passé composé",
  nearFuture: "futur proche",
  conditional: "conditionnel présent",
  imperfect: "imparfait",
  pastHistoric: "passé simple",
  pastPerfect: "plus-que-parfait",
  presentSub: "subjonctif présent"
}
const instructions = {
  er: {
    present: "drop -er from the infinitive to get the stem, then add endings: je -e, tu -es, il/elle/on -e, nous -ons, vous -ez, ils/elles -ent.",
    future: "keep the full infinitive as the stem, then add endings: je -ai, tu -as, il/elle/on -a, nous -ons, vous -ez, ils/elles -ont.",
    imperfect: "take the nous form of present tense and drop -ons to get the stem, then add endings: je -ais, tu -ais, il/elle/on -ait, nous -ions, vous -iez, ils/elles -aient.",
    compoundPast: "check if the verb uses the avoir or être auxilliary, conjugate the auxilliary in the present tense, then add the past participle by dropping -er and adding -é.",
    conditional: "keep the full infinitive as the stem, then add imperfect endings: je -ais, tu -ais, il/elle/on -ait, nous -ions, vous -iez, ils/elles -aient.",
    nearFuture: "conjugate aller in present tense, then add the infinitive of the main verb unchanged.",
    pastHistoric: "drop -er then add the proper endings: je -ai, tu -as, il -a, elle -a, on -a, nous -âmes, vous -âtes, ils -èrent, elles -èrent.",
    pastPerfect: "check if the verb uses the avoir or être auxilliary, then conjugate the auxilliary in the imparfait. Add the verb with the proper endings: for avoir, all endings are -é; for être, all endings are -é but also agree with the pronoun",
    presentSub: "add 'que' + the present 3rd person plural form of the verb (present ils/elles form), remove the 'ent' ending of the verb and add the proper endings: je -e, tu -es, il -e, elle -e, on -e, nous -ons, vous -ez, ils -ent, elles -ent"
  },
  ir: {
    present: "drop -ir from the infinitive to get the stem, then add endings: je -is, tu -is, il/elle/on -it, nous -issons, vous -issez, ils/elles -issent.",
    future: "keep the full infinitive as the stem, then add endings: je -ai, tu -as, il/elle/on -a, nous -ons, vous -ez, ils/elles -ont.",
    imperfect: "take the nous form of present tense and drop -ons to get the stem, then add endings: je -issais, tu -issais, il/elle/on -issait, nous -issions, vous -issiez, ils/elles -issaient.",
    compoundPast: "check if the verb uses the avoir or être auxilliary, conjugate the auxilliary in the present tense, then add the past participle by dropping -ir and adding -i.",
    conditional: "keep the full infinitive as the stem, then add imperfect endings: je -ais, tu -ais, il/elle/on -ait, nous -ions, vous -iez, ils/elles -aient.",
    nearFuture: "conjugate aller in present tense, then add the infinitive of the main verb unchanged.",
    pastHistoric: "drop -er then add the proper endings: je -is, tu -is, il -it, elle -it, on -it, nous -imes, vous -ites, ils -irent, elles -irent.",
    pastPerfect: "check if the verb uses the avoir or être auxilliary, then conjugate the auxilliary in the imparfait. Add the verb with the proper endings: for avoir, all endings are -i; for être, all endings are -i but also agree with the pronoun",
    presentSub: "add 'que' + the present 3rd person plural form of the verb (present ils/elles form), remove the 'ent' ending of the verb and add the proper endings: je -is, tu -is, il -it, elle -it, on -it, nous -issons, vous -issez, ils -issent, elles -issent"
  },
  re: {
    present: "drop -re from the infinitive to get the stem, then add endings: je -s, tu -s, il/elle/on — (nothing), nous -ons, vous -ez, ils/elles -ent.",
    future: "drop the final -e from the infinitive to get the stem, then add endings: je -ai, tu -as, il/elle/on -a, nous -ons, vous -ez, ils/elles -ont.",
    imperfect: "take the nous form of present tense and drop -ons to get the stem, then add endings: je -ais, tu -ais, il/elle/on -ait, nous -ions, vous -iez, ils/elles -aient.",
    compoundPast: "check if the verb uses the avoir or être auxilliary, conjugate the auxilliary in the present tense, then add the past participle by dropping -re and adding -u.",
    conditional: "drop the final -e from the infinitive to get the stem, then add imperfect endings: je -ais, tu -ais, il/elle/on -ait, nous -ions, vous -iez, ils/elles -aient.",
    nearFuture: "conjugate aller in present tense, then add the infinitive of the main verb unchanged.",
    pastHistoric: "drop -er then add the proper endings: je -is, tu -is, il -it, elle -it, on -it, nous -imes, vous -ites, ils -irent, elles -irent.",
    pastPerfect: "check if the verb uses the avoir or être auxilliary, then conjugate the auxilliary in the imparfait. Add the verb with the proper endings: for avoir, all endings are -u; for être, all endings are -u but also agree with the pronoun",
    presentSub: "add 'que' + the present 3rd person plural form of the verb (present ils/elles form), remove the 'ent' ending of the verb and add the proper endings: je -e, tu -es, il -e, elle -e, on -e, nous -ons, vous -ez, ils -ent, elles -ent"
  }
}
const sentenceDisplay = document.getElementById("sentencedisplay")
const answerInput = document.getElementById("answerbox")
const correctDisplay = document.getElementById("correctdisplay")
const counterDisplay = document.getElementById("counterdisplay")
const correctCounterDisplay = document.getElementById("correctcounterdisplay")

const erBtn = document.getElementById("erbtn")
const irBtn = document.getElementById("irbtn")
const reBtn = document.getElementById("rebtn")
const presentBtn = document.getElementById("presentbtn")
const futureBtn = document.getElementById("futurebtn")
const imperfectBtn = document.getElementById("imperfectbtn")
const compoundPastBtn = document.getElementById("compoundpastbtn")
const conditionalBtn = document.getElementById("conditionalbtn")
const nearFutureBtn = document.getElementById("nearfuturebtn")
const pastHistoricBtn = document.getElementById("pasthistoricbtn")
const pastPerfectBtn = document.getElementById("pastperfectbtn")
const presentSubBtn = document.getElementById("presentsubbtn")
const correctPercent = document.getElementById("correctPercent")
const verbButton = document.querySelectorAll(".verbbtn")
const tenseButton = document.querySelectorAll(".tensebtn")

const correctSound = new Audio("correct.wav")
const incorrectSound = new Audio("incorrect.wav")
const muteBtn = document.getElementById("mutebtn")
const hideTableBtn = document.getElementById("hidetablebtn")
const accentButtons = document.getElementById("accentbuttons")
const explainBtn = document.getElementById("explainbtn")
const explanationWindow = document.getElementById("explanationwindow")
const overlay = document.getElementById("overlay")

const presentCounter = document.getElementById("presentcounter")
const futureSimpleCounter = document.getElementById("futuresimplecounter")
const imperfectCounter = document.getElementById("imperfectcounter")
const compoundPastCounter = document.getElementById("compoundpastcounter")
const conditionalCounter = document.getElementById("conditionalcounter")
const nearFutureCounter = document.getElementById("nearfuturecounter")
const pastHistoricCounter = document.getElementById("pasthistoriccounter")
const pastPerfectCounter = document.getElementById("pastperfectcounter")
const presentSubCounter = document.getElementById("presentsubcounter")
let specificCounter = "presentCount"
const tenseCounts = {
  presentCount: 0,
  futureSimpleCount: 0,
  imperfectCount: 0,
  compoundPastCount: 0,
  conditionalCount: 0,
  nearFutureCount: 0,
  pastHistoricCount: 0,
  pastPerfectCount: 0,
  presentSubCount: 0,
}
for (const key in tenseCounts) {
  tenseCounts[key] = parseInt(localStorage.getItem(key)) || 0
}
let correctCounter = 0
let counter = 0

correctPercent.innerHTML = (counter === 0 ? 0 : Math.round((correctCounter / counter) * 100)) + "%"
counterDisplay.innerHTML = counter
correctCounterDisplay.innerHTML = correctCounter
presentCounter.innerHTML = tenseCounts["presentCount"]
futureSimpleCounter.innerHTML = tenseCounts["futureSimpleCount"]
imperfectCounter.innerHTML = tenseCounts["imperfectCount"]
compoundPastCounter.innerHTML = tenseCounts["compoundPastCount"]
conditionalCounter.innerHTML = tenseCounts["conditionalCount"]
nearFutureCounter.innerHTML = tenseCounts["nearFutureCount"]
pastHistoricCounter.innerHTML = tenseCounts["pastHistoricCount"]
pastPerfectCounter.innerHTML = tenseCounts["pastPerfectCount"]
presentSubCounter.innerHTML = tenseCounts["presentSubCount"]
let currentVerbType = "er"
let currentTense = "present"
let correctAnswer = ""
let typeOfVerb = erVerbs
let selectedEnding = presentErEndings
function updateEndingsDisplay() {
  document.getElementById("jeending").innerHTML = selectedEnding["je/j'"]
  document.getElementById("tuending").innerHTML = selectedEnding["tu"]
  document.getElementById("ilending").innerHTML = selectedEnding["il"]
  document.getElementById("elleending").innerHTML = selectedEnding["elle"]
  document.getElementById("onending").innerHTML = selectedEnding["on"]
  document.getElementById("nousending").innerHTML = selectedEnding["nous"]
  document.getElementById("vousending").innerHTML = selectedEnding["vous"]
  document.getElementById("ilsending").innerHTML = selectedEnding["ils"]
  document.getElementById("ellesending").innerHTML = selectedEnding["elles"]
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
reBtn.addEventListener("click", () => {
  currentVerbType = "re"
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
futureBtn.addEventListener("click", () => {
  currentTense = "future"
  specificCounter = "futureSimpleCount"
  updateSelection()
  newQuestion()
})
imperfectBtn.addEventListener("click", () => {
  currentTense = "imperfect"
  specificCounter = "imperfectCount"
  updateSelection()
  newQuestion()
})
compoundPastBtn.addEventListener("click", () => {
  currentTense = "compoundPast"
  specificCounter = "compoundPastCount"
  updateSelection()
  newQuestion()
})
conditionalBtn.addEventListener("click", () => {
  currentTense = "conditional"
  specificCounter = "conditionalCount"
  updateSelection()
  newQuestion()
})
nearFutureBtn.addEventListener("click", () => {
  currentTense = "nearFuture"
  specificCounter = "nearFutureCount"
  updateSelection()
  newQuestion()
})
pastHistoricBtn.addEventListener("click", () => {
  currentTense = "pastHistoric"
  specificCounter = "pastHistoricCount"
  updateSelection()
  newQuestion()
})
pastPerfectBtn.addEventListener("click", () => {
  currentTense = "pastPerfect"
  specificCounter = "pastPerfectCount"
  updateSelection()
  newQuestion()
})
presentSubBtn.addEventListener("click", () => {
  currentTense = "presentSub"
  specificCounter = "presentSubCount"
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
    let verbTag = typeof randomVerb === "object" ? randomVerb.tag : null
    randomVerb = typeof randomVerb === "object" ? randomVerb.value : randomVerb
    let randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)]
    let stem = currentTense === "future" || currentTense === "conditional" ? randomVerb : randomVerb.slice(0, -2)
    if (currentTense === "presentSub") {
      stem = (randomVerb.slice(0,-2) + endingsTable["er"]["present"]["ils"]).slice(0,-3)
    }
    if (verbTag === "etreAuxilliary") {
      helpingVerb = etrehv
    }
    else {
      helpingVerb = avoirhv
    }
    if (helpingVerb === avoirhv) {
      pastPerfectErEndings = {
        "je/j'": "é",
        tu: "é",
        il: "é",
        elle: "é",
        on: "é",
        nous: "é",
        vous: "é",
        ils: "é",
        elles: "é"
      }
      pastPerfectIrEndings = {
        "je/j'": "i",
        tu: "i",
        il: "i",
        elle: "i",
        on: "i",
        nous: "i",
        vous: "i",
        ils: "i",
        elles: "i"
      }
      pastPerfectReEndings = {
        "je/j'": "u",
        tu: "u",
        il: "u",
        elle: "u",
        on: "u",
        nous: "u",
        vous: "u",
        ils: "u",
        elles: "u"
      }
    }
    else {
      pastPerfectErEndings = {
        "je/j'": "é",
        tu: "é",
        il: "é",
        elle: "ée",
        on: "é",
        nous: "és",
        vous: "és",
        ils: "é",
        elles: "ées"
      }
      pastPerfectIrEndings = {
        "je/j'": "i",
        tu: "i",
        il: "i",
        elle: "ie",
        on: "i",
        nous: "is",
        vous: "is",
        ils: "is",
        elles: "ies"
      }
      pastPerfectReEndings = {
        "je/j'": "u",
        tu: "u",
        il: "u",
        elle: "ue",
        on: "u",
        nous: "us",
        vous: "us",
        ils: "us",
        elles: "ues"
      }
    }
    endingsTable.er.pastPerfect = pastPerfectErEndings
    endingsTable.ir.pastPerfect = pastPerfectIrEndings
    endingsTable.re.pastPerfect = pastPerfectReEndings
    
    updateEndingsDisplay()
    function getCorrectAnswer() {
      return correctAnswer = stem + selectedEnding[randomPronoun]
    }
    getCorrectAnswer()
    if (currentTense === "compoundPast") {
      if (verbTag === "etreAuxilliary") {
        correctAnswer = etre[randomPronoun] + " " + stem + selectedEnding[randomPronoun]
      }
      else {
        correctAnswer = avoir[randomPronoun] + " " + stem + selectedEnding[randomPronoun]
      }
    }
    if ((currentTense === "future" || currentTense === "conditional") && currentVerbType === "re") {
      stem = randomVerb.slice(0,-1)
      getCorrectAnswer()
    }
    if (currentTense === "nearFuture") {
      correctAnswer = aller[randomPronoun] + " " + stem + selectedEnding[randomPronoun]
    }
    if (currentTense === "pastPerfect") {
      if (verbTag === "etreAuxilliary") {
        correctAnswer = etrehv[randomPronoun] + " " + stem + selectedEnding[randomPronoun]
      }
      else {
        correctAnswer = avoirhv[randomPronoun] + " " + stem + selectedEnding[randomPronoun]
      }
    }
    if (currentTense === "presentSub") {
      correctAnswer = "que " + stem + selectedEnding[randomPronoun]
    }
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
        if (answer.trim().toLowerCase() === correctAnswer) {
            correctCounter += 1
            tenseCounts[specificCounter] += 1
            localStorage.setItem(specificCounter, tenseCounts[specificCounter])
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
            incorrectSound.currentTime = 0
            incorrectSound.play()
        }
        
        newQuestion()
      
        counter += 1
        presentCounter.innerHTML = tenseCounts["presentCount"]
        futureSimpleCounter.innerHTML = tenseCounts["futureSimpleCount"]
        imperfectCounter.innerHTML = tenseCounts["imperfectCount"]
        compoundPastCounter.innerHTML = tenseCounts["compoundPastCount"]
        conditionalCounter.innerHTML = tenseCounts["conditionalCount"]
        nearFutureCounter.innerHTML = tenseCounts["nearFutureCount"]
        pastHistoricCounter.innerHTML = tenseCounts["pastHistoricCount"]
        pastPerfectCounter.innerHTML = tenseCounts["pastPerfectCount"]
        presentSubCounter.innerHTML = tenseCounts["presentSubCount"]
        counterDisplay.innerHTML = counter
        correctPercent.innerHTML = (counter === 0 ? 0 : Math.round((correctCounter / counter) * 100)) + "%"
    }
})