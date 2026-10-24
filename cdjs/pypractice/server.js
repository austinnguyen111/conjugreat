import express from 'express'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'PythonPractice.html'))
})

app.post('/generate', async (req, res) => {
  const { difficulty, type } = req.body

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: `Generate a Python problem. Difficulty: ${difficulty}/5, Type: ${type}. Respond ONLY with JSON, no markdown, no backticks: {"title":"...","description":"...","hint":"...","solution":"...","test_cases":[{"input":"...","expected":"..."}]}` }]
      }]
    })
  })

  const data = await response.json()
  console.log(JSON.stringify(data))
  const text = data.candidates[0].content.parts[0].text
  res.json({ text })
})

app.listen(3000, () => console.log('running on http://localhost:3000'))