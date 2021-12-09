const { Socket } = require('net')

const socket = new Socket()

socket.setEncoding = 'UTF-8'

socket.connect(3000, '127.0.0.1', function () {
  console.log('与服务端建立连接')
  setInterval(() => {
    console.log('向服务端发送消息')
    socket.write(`${Date.now()}`)
  }, 2000)
})

socket.on('data', function (msg) {
  console.log('接受来自服务端消息', msg.toString())
})
socket.on('error', function (error) {
  console.log('error ' + error)
})
socket.on('close', function () {
  console.log('服务器端下线了')
})
