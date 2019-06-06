const { spawn } = require('child_process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

for(let i = 0; i < 100; i++){
    console.log("\n")
}

console.log('\x1b[1m\x1b[36m%s\x1b[0m', "Enter Wallaby IPv4 Address")
readline.question(`IP: `, (ip) => {
    console.log('\x1b[1m\x1b[36m%s\x1b[0m', "Enter Wallaby Hostname (Default: root)")
    let hostname;
    let password;
    readline.question(`Hostname (root): `, (name) => {
        hostname = name || "root"
        console.log('\x1b[1m\x1b[36m%s\x1b[0m', "Enter Wallaby Password (Default: no password)")
            let transferMain = spawn(`scp`, [`./wallabyWatched.js`, `${hostname}@${ip}:~/`]);

            transferMain.on(`close`, (code) => {
                if(code === 0){
                    console.log("Successfully transferred wallabyWatched.js")

                    let transferPackage = spawn(`scp`, [`./package.json`, `${hostname}@${ip}:~/`]);
        
                    transferPackage.on(`close`, (code) => {
                        if(code === 0){
                            console.log("Successfully transferred package.json")
                            console.log("To Run:")
                            console.log(`$ ssh ${hostname}@${ip}`)
                            console.log(`$ mv ./wallabyWatched.js ./YOUR_PROJECT_DIRECTORY`)
                            console.log(`$ cd ./YOUR_PROJECT_DIRECTORY`)
                            console.log(`$ npm install`)
                            console.log(`$ node wallabyWatched.js`)
                            process.exit();
                        }
                    })


                }
            })

           
        
    });

   
    
})