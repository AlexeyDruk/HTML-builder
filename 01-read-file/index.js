const fs = require('fs');
const path = require('path');
let put = path.join(__dirname,'text.txt');
console.log(put);
stream = fs.createReadStream('01-read-file/text.txt','utf-8');
stream.on('readable', function(){
    var data = stream.read();
    if(data === null){
        return;
    }
    console.log(data);
});
