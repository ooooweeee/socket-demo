require('nodejs-websocket')
  .createServer(function (conn) {
    conn.on('text', function (str) {
      console.log('收到的信息为:' + str)
      conn.sendText('服务器收到消息为：' + str)
    })
    conn.on('close', function () {
      console.log('关闭连接')
    })
    conn.on('error', function () {
      console.log('异常关闭')
    })
  })
  .listen(3000, '127.0.0.1')
