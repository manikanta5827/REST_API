const sql = require("mysql2");

const con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ammay12$",
  database: "college",
});



function getUser(id) {
  return new Promise((success,reject)=>{
    con.query(`select * from location where name=?`,[id], (err, row, col) => {
      if (err) {
        reject(err)
      } else {
        success(row);
      } 
    });
  })
}

 


function createUser(n, c, s) {
 return new Promise((success,reject)=>{
  con.query(
    `INSERT INTO location (name,city,salary) VALUES (?,?,?)`,[n,c,s],
    (err, res) => {
      if (err) {
        reject(err)
      } else {
        success(res)
      }
    }
  );
 })
}

function updateUser(id,n, c, s) {
  return new Promise((success,reject)=>{
      getUser(id).then((rows)=>{
        if(rows.length>0){
          con.query(
            `UPDATE location SET name=? ,city=?,salary=? WHERE name=?`,[n,c,s,id],
            (err, res) => {
              if (err) {
                reject(err)
              } else {
                 success(res)
              }
            }
          );
        }
        else{
          reject("User Id not found")
        }
      })


   
  })
}

function deleteUser(id) {
    return new Promise((success,reject)=>{
            getUser(id).then((rows)=>{
              if(rows.length>0){
                con.query(
                  `DELETE FROM location WHERE name= ?`,[id],
                  (err, res) => {
                    if (err) {
                      reject(err)
                    } else {
                      success(res)
                    }
                  }
                );
              }
              else{
                    reject("User Id not found")
              }
            })


     
    })
  }


  module.exports={
    getUser,
    createUser,
    updateUser,
    deleteUser
  }


