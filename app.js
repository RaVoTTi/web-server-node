const express = require('express')
const app = express()
const hbs = require('hbs');
const locations = require('./models/locations');
require('dotenv').config()

const port = process.env.PORT



hbs.registerPartials(__dirname + '/views/partials',  (err) => {});

app.set('view engine', 'hbs')

app.use(express.static('public'))

// esto es para recibir del input
app.use(express.urlencoded({ extended: false }));

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
  app.get(['/login', '/'],(req, res) => {
    res.render('login', {
      nombre: 'Valentin Ravotti',
      titulo: 'Curso Node'
  })
  })
  app.post('/login',(req, res) => {
    console.log(req.body)
    res.redirect('/dashboard')
  })
app.get('/dashboard',(req, res) => {
    console.log(new Locations())
    res.render('dashboard', {
      nombre: 'Valentin Ravotti',
      titulo: 'Curso Node'
  })
  })



app.get('*',  (req, res) => {
    res.send('/public/404.html')

})

app.listen(port, () => {
  console.log('Corriendo en puerto', port)
})