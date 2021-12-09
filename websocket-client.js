const WebSocket = require('ws')
const ws = new WebSocket('ws://127.0.0.1:3000')

ws.on('open', function open() {
  ws.send("I'm client")
})
ws.on('message', function message(data) {
  console.log(data.toString())
})
