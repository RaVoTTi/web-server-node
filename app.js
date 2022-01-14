const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config()

const port = process.env.PORT



hbs.registerPartials(__dirname + '/views/partials',  (err) => {});

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Valentin Ravotti',
        titulo: 'Curso Node'
    })
})
app.get('/generic',(req, res) => {
    res.render('generic', {
      nombre: 'Valentin Ravotti',
      titulo: 'Curso Node'
  })
  })
  app.get('/elements',(req, res) => {
    res.render('elements', {
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