const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config()

const port = process.env.PORT




app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials',  (err) => {});

app.use(express.static('public'))

// app.get('/',  (req, res) => {
//     res.render('home', {
//         nombre: 'Valentin Ravotti',
//         titulo: 'Curso Node'
//     })
// })
// app.get('/generic',(req, res) => {
//     res.render('generic', {
//       nombre: 'Valentin Ravotti',
//       titulo: 'Curso Node'
//   })
//   })
//   app.get('/elements',(req, res) => {
//     res.render('elements', {
//       nombre: 'Valentin Ravotti',
//       titulo: 'Curso Node'
//   })
//   })

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/index.html')

})

app.listen(port, () => {
  console.log('Corriendo en puerto', port)
})