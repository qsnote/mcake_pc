const mysql=require('mysql');
var pool=mysql.createPool({
  host:'localhost',
  port:'3306',
  password:'',
  user:'root',
  database:'mcake_pc',
  connectionLimit:20
});
module.exports=pool;