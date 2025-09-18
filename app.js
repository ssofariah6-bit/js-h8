const fs = require('fs');
const readln = require('readline');
const rl = readln.createInterface({
    input : process.stdin,
    output : process.stdout,
});

//membuat folder data1
const dirpath = './data';
if (!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
}

//membuat file contacts.json jika belum ada
const datapath = './data/contacts.json';
if (!fs.existsSync(datapath)){
    fs.writeFileSync(datapath, '[]', 'utf-8');
}

rl.question ('Masukkan Nama Anda : ', (nama) => {
    rl.question ('Masukkan Usia Anda : ', (usia) =>{
        rl.question('Masukkan Hobi Anda : ', (hobi) => {
        const contact = {nama : nama, usia : usia, hobi : hobi};
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts= JSON.parse(file);
        contacts.push(contact);
        //console.log(contacts);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('Nuhun');

    rl.close();
    })
    
    });
});