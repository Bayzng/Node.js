

const fs = require('fs');
const path = require('path');



// creating a folder

if (!fs.existsSync(path.join(__dirname, 'files', 'folder'))) {
    fs.mkdir(path.join(__dirname, 'files', 'folder'), (err) => {
        if (err) throw err;
        console.log('directory successfully created');
    })
} else {
    console.log('directory already exist');
}


// deleting a folder


if (fs.existsSync(path.join(__dirname, 'files', 'folder'))) {
    fs.rmdir(path.join(__dirname, 'files', 'folder'), (err) => {
        if (err) throw err;
        console.log('directory successfully deleted');
    }) 
}




