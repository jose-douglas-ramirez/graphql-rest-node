const Request = require('tedious').Request;  
const TYPES = require('tedious').TYPES;  

function loadLevel1(connection){
    return new Promise((resolve, reject)=>{
    let result = [];  
    request = new Request("SELECT pk1_ID, name, description FROM dbo.Level1;", function(err, rowCount) {  
    if (err) {
        console.log(err);
        } else {
        // console.log(rowCount + ' rows');
        resolve(result);
        }
    });

    request.on('row', function(columns) {  
        let entity = {}
        columns.forEach(function(column) {  
            if (column.value === null) {  
               console.log('NULL');  
            } else {  
              entity[column.metadata.colName] = column.value;
            }  
        });
        result.push(entity);    
    });  
    connection.execSql(request); 

  })
}

module.exports = {
    loadLevel1
}