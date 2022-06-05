const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

const tea = {
    "types": [
        {
            'type': 'yellow',
            'origin': '',
            'watertemp': '',
            'steeptimeminutes': 2,
            'caffeinated': '',
            'flavour': 'nutty'

        }
    ]
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response) => {
    response.json(tea)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running fast on port ${PORT}`)
})