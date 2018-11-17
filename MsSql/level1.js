const Request = require('tedious').Request;  
const TYPES = require('tedious').TYPES;  

async function loadLevel1(connection){
    return new Promise((resolve, reject)=>{
    request = new Request("SELECT pk1_ID, name, description FROM dbo.Level1;", function(err, rowCount) {
        if (err) {
          console.log(err);
        } else {
          console.log(rowCount + ' rows');
        }
    
        connection.close();
      });
    
      request.on('row', function(columns) {
        columns.forEach(function(column) {
          if (column.value === null) {
            console.log('NULL');
          } else {
            console.log(column.value);
          }
        });
      });
    
      request.on('done', function(rowCount, more) {
        console.log(rowCount + ' rows returned');
      });
    
      // In SQL Server 2000 you may need: connection.execSqlBatch(request);
      connection.execSql(request);
}

module.exports = {
    loadLevel1
}