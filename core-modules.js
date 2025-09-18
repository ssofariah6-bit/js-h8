const {error} = require('console');
const fs = require('fs');
//const {console} = require('inspector');

//Menulis string ke file (sync)
try{
    fs.writeFileSync('data/text.txt', 'Hello Shync');
} catch (e){
    console.log(e);
}

//Membaca isi file
//Shync
const data = fs.readFileSync('data/text.txt');
console.log(data.toString());

//Menuliskan string ke file (Async)
/*fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchoronous', (err) => {
    console.log(err);
})*/

