let chokidar = require('chokidar')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let fs = require('fs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    // One-liner for current directory, ignores .dotfiles
    chokidar.watch('.', {
        ignored: [/(^|[\/\\])\../, "./node_modules", "app.js", "package-lock.json", "package.json"] //ignore dotfiles (regex magic), and the files of the fileWatcher, so only YOUR files are synced
    }).on('all', (event, path) => {
        console.log(event, path);
        if (event === "change" || event === "add") {
            fs.readFile(path, (err, data) => {
                if (err) throw err;
                console.log("sending " + path)
                socket.emit("update", event, path, data)
            });
        } else if (event === 'unlink') {
            socket.emit("unlink", path)
        }
    });


});

http.listen(3000, function () {
    console.log('listening on *:3000');
});