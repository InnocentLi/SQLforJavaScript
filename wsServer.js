var ws = require("nodejs-websocket")
//小demo 首先安装 cnpm nodejs-websocket 模块
//最后用 
var PORT = 3000

var clientCount = 0;

var server = ws.createServer(function (conn) {
    console.log("New connection")
    clientCount++
    conn.nickname = '服务器' + clientCount
    var mes = {}
    mes.type = "enter"
    mes.data = conn.nickname + '已成功连接'
    broadcast(JSON.stringify(mes))
    conn.on("text", function (str) {
        var mes = {}
        mes.type = "message"
        mes.data = conn.nickname + ":" + str
        broadcast(JSON.stringify(mes))
        console.log("Received " + str)
    })
    conn.on("close", function (code, reason) {
        var mes = {}
        mes.type = "leave"
        mes.data = conn.nickname + '断开连接'
        broadcast(JSON.stringify(mes))
        console.log("Connection closed")
    })
    conn.on("error", function (err) {
        console.log("handle err")
        console.log(err)
    })
}).listen(PORT)

console.log("websocket server listening on port " + PORT)

function broadcast(str) {
    server.connections.forEach(function (connection) {
        connection.sendText(str)
    })
}