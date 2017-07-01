const http = require('http')
const fs = require('fs')
const PORT = 8080

function requestHandler(request, response) {
    console.log(request.url)

    fs.readFile('index.html', 'utf8', (err, fileContent) => {
        if(err){
            console.log('404 - Not Found')
            return
        }
        response.setHeader('Content-Type', 'text/html')
        response.end(fileContent)
    })
}

const server = http.createServer(requestHandler)

server.listen(PORT, (err) => {
    if (err) {
        console.log('Server with problems', err)
    }
    console.log('Server up at http://localhost:' + PORT)
})