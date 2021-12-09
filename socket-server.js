var net = require('net')

var server = net.createServer(function (socket) {
  console.log('与客户端建立连接')
  socket.on('data', function (data) {
    console.log(`服务端收到客户端数据 ${data}`)

    socket.write(`现在客户端的时间是：${data}`)
    // socket.end() // 断开与客户端的连接
  })

  socket.on('close', function () {
    console.log('客户端连接断开')
  })
  socket.on('error', function () {
    console.log('客户端非法中断')
  })
})

server.listen(3000, '127.0.0.1', function () {
  console.log('开始监听来自客户端的请求')
})
