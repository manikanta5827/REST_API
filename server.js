let db = require("./DB");
let express=require('express');
let app=express();

app.listen(3000);

app.use(express.json())

app.get('/users',(req,res)=>{
    db.getUser().then((rows)=>{
        res.send(rows);
    })
    db.getUser().catch((err)=>{
        res.send(err);
    })
})

app.post('/users',(req,res)=>{

    db.createUser(req.body.name,req.body.city,req.body.salary).then((rows)=>{
        res.send("Data Created successfully");
    })
   .catch((err)=>{
        res.send("Error creating user");
    })
})

app.put('/users',(req,res)=>{

    db.updateUser(req.body.id,req.body.name,req.body.city,req.body.salary).then((rows)=>{
        res.send("Data Updated successfully");
    })
   .catch((err)=>{
        res.send(err);
    })
})

app.delete('/users',(req,res)=>{

    db.deleteUser(req.body.id).then((rows)=>{
        res.send("Data Deleted successfully");
    })
   .catch((err)=>{
        res.send(err);
    })
})