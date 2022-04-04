const { rejects } = require("assert");
const { resolve } = require("path");

const fs = requier('fs');
const axios = requier('axios');

writeJsonplaceholderToFile.then(() => {

})
.catch(e => console. error(e));

function writeJsonplaceholderToFile() {
    return new Promise((resolve, reject) => 
        axios.get( 'https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            const json = JSON.stringify(res.data);
            fs.writeFile ('todos.json', json, (err) => {
                if(err) return reject (err);

                resolve ()
            }}
        }}        
        .catch(reject)
    }} 
}
