# WallabyFileWatcher

Find the GCER 2019 paper here, includes additional installation and usage instructions [https://docs.google.com/document/d/1OGVnkgzQj59FdcAxnnXn9L6eGMM2J2V1Gi-kxLOE1Aw/edit?usp=sharing](https://docs.google.com/document/d/1OGVnkgzQj59FdcAxnnXn9L6eGMM2J2V1Gi-kxLOE1Aw/edit?usp=sharing)

## Preliminary Setup

Before installing, connecting your wallaby to a wifi network allows for the same functionality as normal, while allowing you to access the internet on your programming computer

To connect your wallaby to a wifi network, first set it to client mode, disabling its onboard wifi server and allowing it to connect to an external one

### Enabling client mode

```bash
$ mkdir /home/root/services

$ mv /lib/systemd/system/hostapd.service /home/root/services

$ mv /lib/systemd/system/wifi.service /home/root/services
```

Following this, the blue indicator light should turn off. If this does not happen, restarting the wallaby via the power switch should resolve the issue. Restarting with the shutdown button in botui will undo everything you just did, which could potentially be helpful later if you want your wifi server back on your wallaby. This can also be done by re-enabling wifi in the wifi menu of settings.

After setting your wallaby to client mode, you need to connect it to a wifi network, this can be (somewhat reliably) done with the following commands

### Connecting to a network

```bash
$ wpa_cli
    > add_network 0
    > set_network 0 ssid "yourNetworkName"
    > set_network 0 psk "yourNetworksPassword"
```

The zero in these commands represents an internal id of a network. If you wish to configure multiple networks, use any other number, but ensure it remains consistent throughout all three commands.

## Installation

First, identify if your machine has wget or curl. If using windows, git bash is likely required to complete the installation, as it requires sh files be run

If your system supports cURL, use the following commands to install, executing them in your project directory

```bash
$ curl -O https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/serverInstallcurl.sh

$ chmod +x ./serverInstallcurl.sh && ./serverInstallcurl.sh
```

If your system supports wget, use the following commands to intall, executing them in your project directory

```bash
$ wget https://raw.githubusercontent.com/SAXTEN2011/WallabyFileWatcher/master/serverInstallwget.sh

$ chmod +x ./serverInstallwget.sh && ./serverInstallwget.sh
```

Executing either of these sets of commands will install all necessary files to your project directory, and after some prompts, install all necessary files to your wallaby, wherever you wish your project directory to be delivered to.

Should something go wrong during the transferring of installation files to the wallaby, you can run
```bash
$ node installToClient.js
```

Following the transfer, dependency files still need to be installed on the wallaby. These can be installed by running the following command in the directory on the wallaby that is being kept a mirror.

```bash
$ npm install
```

Finally, update the first line of wallabyWatched.js with your computer's ipv4 address and installation is complete.

## Usage

Starting app.js and wallabyWatched.js will allow files to be transferred, this can be done by running

```bash
On your computer
$ node app.js

On the wallaby
$ node wallabyWatched.js
```

Running either of these commands will lock your terminal until you exit the program with ctrl+c. Using a program like screen or adding an ampersand to the end of the command will prevent the terminal from locking
