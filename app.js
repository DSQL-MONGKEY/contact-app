import validator from 'validator';
import * as fs from 'node:fs';
import readline from 'readline'

const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Masukan nama anda: ', (nama) => {
    rl.question('Masukan NoHP anda: ', (noHP) => {
        console.log(`No HP anda ${noHP}`)
        console.log(`terimakasih ${nama}, noHP anda ${noHP}`)
        rl.close()
    })
})