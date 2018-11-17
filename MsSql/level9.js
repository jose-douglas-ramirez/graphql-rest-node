const Request = require('tedious').Request;  
const TYPES = require('tedious').TYPES;  

const query = `SELECT dbo.Level1.pk1_ID, dbo.Level1.name AS level1_name, dbo.Level1.description AS level1_description, dbo.Level2.pk2_ID, dbo.Level2.fk1_ID, dbo.Level2.name AS level2_name, dbo.Level2.description AS level2_description, dbo.Level3.pk3_ID, dbo.Level3.fk2_ID, dbo.Level3.name AS level3_name, dbo.Level3.description AS level3_description, dbo.Level4.pk4_ID, dbo.Level4.fk3_ID, 
dbo.Level4.name AS level4_name, dbo.Level4.description AS level4_description, dbo.Level5.pk5_ID, dbo.Level5.fk4_ID, dbo.Level5.name AS level5_name, dbo.Level5.description AS level5_description, dbo.Level6.pk6_ID, dbo.Level6.fk5_ID, dbo.Level6.name AS level6_name, dbo.Level6.description AS level6_description, dbo.Level7.pk7_ID, dbo.Level7.fk6_ID, 
dbo.Level7.name AS level7_name, dbo.Level7.description AS level7_description, dbo.Level8.pk8_ID, dbo.Level8.fk7_ID, dbo.Level8.name AS level8_name, dbo.Level8.description AS level8_description, dbo.Level9.pk9_ID, dbo.Level9.fk8_ID, dbo.Level9.name, dbo.Level9.description
FROM  dbo.Level2 INNER JOIN
dbo.Level1 ON dbo.Level2.fk1_ID = dbo.Level1.pk1_ID INNER JOIN
dbo.Level3 ON dbo.Level2.pk2_ID = dbo.Level3.fk2_ID INNER JOIN
dbo.Level4 ON dbo.Level3.pk3_ID = dbo.Level4.fk3_ID INNER JOIN
dbo.Level5 ON dbo.Level4.pk4_ID = dbo.Level5.fk4_ID INNER JOIN
dbo.Level6 ON dbo.Level5.pk5_ID = dbo.Level6.fk5_ID INNER JOIN
dbo.Level7 ON dbo.Level6.pk6_ID = dbo.Level7.fk6_ID INNER JOIN
dbo.Level8 ON dbo.Level7.pk7_ID = dbo.Level8.fk7_ID INNER JOIN
dbo.Level9 ON dbo.Level8.pk8_ID = dbo.Level9.fk8_ID`;

function loadLevel9(connection){
    return new Promise((resolve, reject)=>{
    let result = [];  
    request = new Request(query, function(err, rowCount) {  
    if (err) {
        console.log(err);
        } else {
        console.log(rowCount + ' rows');
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
    loadLevel9
}