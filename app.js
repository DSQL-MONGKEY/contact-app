import validator from 'validator';
import * as fs from 'node:fs';
import readline from 'readline';

const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Masukkan Nama Anda: ', (nama) => {
    rl.question('Masukkan Umur Anda: ', (umur) => {
        rl.question('Masukan domisili anda: ', (domisili) => {
            rl.question('Masukkan hobi: ', (hobi) => {
                const data = {nama, umur, domisili, hobi}
                const file = fs.readFileSync('./contacts.json', 'utf-8')
                const contacts = JSON.parse(file)
                
                contacts.push(data)
                fs.writeFileSync('./contacts.json', JSON.stringify(contacts))
                console.log(contacts, typeof(contacts))
                rl.close()
            })
        })
    })
})