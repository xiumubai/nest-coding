const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'xiumubai',
  database: 'mysql2-test'
});

// 查询customers表中所有数据
connection.query(
  'SELECT * FROM customers',
  function(err, results, fields) {
    console.log(results);
    console.log(fields.map(item => item.name)); 
  }
);

// 插入一条数据

connection.execute('INSERT INTO customers (name) VALUES (?)',
    ['大强'], (err, results, fields) => {
    console.log(err);
});
