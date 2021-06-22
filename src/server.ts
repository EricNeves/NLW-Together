import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.json({msg: 'Hello World'})
})

app.listen(3000, () => 
    console.log('Server running on PORT 3000')
)