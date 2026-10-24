console.log('SERVER VERSION: GEMINI')
let selectedType = null
let selectedDifficulty = 1

const generateButton = document.querySelector(".generate")
const problemStatement = document.querySelector(".problemstatement")
const difficultyDisplay = document.getElementById("difficulty-display")
const typeDisplay = document.getElementById("type-display")
const difficultySlider = document.getElementById("difficulty-options")
const editorTarget = document.getElementById('editor')

document.querySelectorAll(".type-options button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".type-options button").forEach(b => b.classList.remove("selected"))
        button.classList.add("selected")
        selectedType = button.textContent.trim()
        typeDisplay.textContent = `type: ${selectedType}`
    });
});

difficultySlider.addEventListener("input", () => {
    selectedDifficulty = Number(difficultySlider.value)
    difficultyDisplay.textContent = `difficulty: ${selectedDifficulty}`
});

document.addEventListener("DOMContentLoaded", () => {
    const editor = CodeMirror(editorTarget, {
        mode: "python",
        theme: "eclipse",
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        value: "def my_solution():\n    # Write your multi-line code here"
    });

    editor.setSize("100%", "375px");
});

async function runPrompt() {
  document.getElementById('description').innerText = 'generating...'

  const response = await fetch('/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ difficulty: selectedDifficulty, type: selectedType })
  })

  const data = await response.json()
  console.log(JSON.stringify(data))
  const text = data.text
  const clean = text.replace(/```json|```/g, '').trim()
  const problem = JSON.parse(clean)

  document.getElementById('title').innerText = problem.title
  document.getElementById('description').innerText = problem.description
  document.getElementById('hint').innerText = '💡 ' + problem.hint
  document.getElementById('solution').innerText = problem.solution

  let rows = problem.test_cases.map(tc => `
    <tr><td>${tc.input}</td><td>${tc.expected}</td></tr>
  `).join('')

  document.querySelector('#test-cases table').innerHTML = `
    <tr><th>input</th><th>expected</th></tr>
    ${rows}
  `
}

function hintdropdown() {
  document.getElementById("hintcontent").classList.toggle("show")
  document.getElementById("solutioncontent").classList.remove("show")
}

function solutiondropdown() {
  document.getElementById("solutioncontent").classList.toggle("show")
  document.getElementById("hintcontent").classList.remove("show")
}