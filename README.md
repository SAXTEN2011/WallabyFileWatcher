# WallabyFileWatcher

One-line client installation:
while in highest level of directory you want synced (e.g the folder of your project):

```bash
wget https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/piInstall.sh && sudo chmod +x ./piInstall.sh && ./piInstall.sh
```

the ip address is hardcoded, edit the first line of wallabyWatched.js with the ip of the server, followed by :3000, or the port dictated in http.listen

One-line server installation:
Again in highest level of directory you want to sync:

Linux

```bash
wget https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/app.js && wget https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/package.json && npm install
```

Windows/OSX

```bash
curl -o https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/app.js && curl -o https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/package.json && npm install
```



Alternatively,
```bash
git clone https://github.com/SAXTEN2011/WallabyFileWatcher.git
```
Will clone the whole repo with all the files you need, so you can clone the repo once and scp over necessary files to a wallaby
