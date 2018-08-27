const http = require('http')
const PORT = 1337
const url = require('url')
const fs = require('fs')

let server = http.createServer((req, res) => {
	fs.readFile('./assets/Cookie.png', (err, file) => {
		if (err) throw err
		res.write(file)
		res.end()

	})
}).listen(PORT, () => {
	console.log('服务启动, 端口: ' + PORT)
})