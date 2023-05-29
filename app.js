import express from 'express'

const app = express()
/*const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)*/

app.use(express.static('public'))

//get the '/' route and have it load 'index.html' from the public folder
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

const PORT = 5000
app.listen(PORT, () => console.log(`Successfully running on port ${PORT}`))