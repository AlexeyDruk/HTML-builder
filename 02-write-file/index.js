const fs = require('fs');
const path = require('path');
const { stdin} = process;
fs.open("02-write-file/text.txt", "w", function(err){
    if (err) {
        console.log(err);
    } else{
        console.log("Введите пожалуйста тескт");
    }
    stdin.on('data', data = function (data){
        const Newdata = data.toString();
        if (Newdata == 'exit') {
            console.log('sdffffffffffffffffffffffffffffffffff');
        } else {
            fs.appendFile("02-write-file/text.txt", data, (err) => {
                if(err) throw err;
                console.log('запись добавлена!');
            })
        }
     });
});