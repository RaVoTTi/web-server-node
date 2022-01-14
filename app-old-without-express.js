const http = require('http')

// Request es todo que esta solicitando la url, el cliente
// Response es la respuesta de nuestro web server

http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachament; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'})


    res.write('id, nombre\n')
    res.write('id, nombre\n')
    res.write('id, nombre\n')
    res.write('id, nombre\n')
    res.write('id, nombre\n')

    res.end()
    
}).listen(8080)
    console.log('Server', 8080)