var socket = require('socket.io-client')('http://192.168.1.103:3000');
let fs = require('fs');
let path = require('path')

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

socket.on('connect', function () {
    console.log('connect')
})

socket.on('update', function (event, path, data) {
    if (event === "change" || event === "add") {
        //end temp line for local debugging
        ensureDirectoryExistence(path)
        fs.writeFile(path, data, (err) => {
            if (err) throw err;
            console.log("written data to " + path)
        })
    }
})

socket.on('unlink', function(path){
    fs.unlink(path, (err) => {
        if (err) throw err;
        console.log(path + ' was deleted');
      });
})