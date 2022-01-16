import express from 'express'

const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
  res.status(200).json('It works!')
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))