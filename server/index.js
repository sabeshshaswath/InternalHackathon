const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(cors())
let con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1598',
    database:'premockwlform'
});
con.connect((er)=>{
    if(er) throw er
    console.log("db connected")
})
app.get('/',(req,res)=>{
    res.send("alive")
})
app.post('/data',(req,res)=>{
    // console.log(req.body)
    const {name,doj,cgpa}=req.body
    // console.log(name)
    con.query(`insert into student (name,doj,cgpa) values('${name}',"${doj}",${cgpa})`,
    (err,result)=>{
        if(err) throw err
        res.send("Populated successfully")
    }
    )
})
app.get('/studetail',(req,res)=>{
    con.query('SELECT * FROM student',(er,result)=>{
        if(er) throw er
        console.log(result)
        res.status(200).json(result)
    })
})
app.listen(3002,()=>console.log("Server is on 🔥"))