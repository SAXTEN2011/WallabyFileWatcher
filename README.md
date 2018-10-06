# WallabyFileWatcher

One-line client installation:
while in highest level of directory you want synced (e.g the folder of your project):

```bash
wget https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/piInstall.sh && sudo chmod +x ./piInstall.sh && ./piInstall.sh
```

the ip address is hardcoded, edit the first line of wallabyWatched.js with the ip of the server, followed by :3000, or the port dictated in http.listen

One-line server installation:
Again in highest level of directory you want to sync:

```bash
wget https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/app.js && wget https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/package.json && npm install
```