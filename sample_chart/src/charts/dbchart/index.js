
var mysql = require('mysql');
var datapoints;
var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'123456',
    database:'dashb'
});

function startup()
{
async function mysqlConnection(){
connection.connect(function(err){
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
})

$query ="select * from DATA";

connection.query($query,function(err,rows,feilds){
    if(err){
        console.log("err");
        return
    }
    datapoints =rows;
    console.log(rows);
    
    // return datapoints
})

// connection.end(function(){
//     console.log("close");
// })
return datapoints;
}

mysqlConnection().then((datapoints) =>{
    console.log (datapoints)
});
}
startup();