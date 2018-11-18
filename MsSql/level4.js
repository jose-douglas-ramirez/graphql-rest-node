const Request = require('tedious').Request;  
const TYPES = require('tedious').TYPES;  

const query = `SELECT dbo.Level1.pk1_ID, dbo.Level1.name AS level1_name, dbo.Level1.description AS level1_description, dbo.Level2.pk2_ID, dbo.Level2.fk1_ID, dbo.Level2.name AS level2_name, dbo.Level2.description AS level2_description, dbo.Level3.pk3_ID, dbo.Level3.fk2_ID, dbo.Level3.name AS level3_name, dbo.Level3.description AS level3_description, dbo.Level4.pk4_ID, dbo.Level4.fk3_ID, 
dbo.Level4.name, dbo.Level4.description
FROM  dbo.Level2 INNER JOIN
dbo.Level1 ON dbo.Level2.fk1_ID = dbo.Level1.pk1_ID INNER JOIN
dbo.Level3 ON dbo.Level2.pk2_ID = dbo.Level3.fk2_ID INNER JOIN
dbo.Level4 ON dbo.Level3.pk3_ID = dbo.Level4.fk3_ID`;

function loadLevel4(connection){
    return new Promise((resolve, reject)=>{
    let result = [];  
    request = new Request(query, function(err, rowCount) {  
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

    request.on('done', function(rowCount, more) {  
        resolve(rowCount);
    });  
    
    connection.execSql(request); 

  })
}

module.exports = {
    loadLevel4
}