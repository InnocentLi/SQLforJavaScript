var ws = new WebSocket("ws://localhost:3000/");

function showMessage(str, type) {

}
ws.onopen = function () {
    console.log("websocket open");
    document.getElementById("sendBtn").onclick = function () {
        var txt = document.getElementById("sql").innerHTML;
        console.log(txt);
        if (txt) {
            ws.send(txt);
        }
    }
}
ws.onclose = function () {
    console.log("websocket open");
}
ws.onmessage = function (e) {
    console.log(e.data);
    var mes = JSON.parse(e.data);
    showMessage(mes.data, mes.type);
}