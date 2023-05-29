import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

const PORT = 5000
app.listen(PORT, () => console.log(`Successfully running on port ${PORT}`))
