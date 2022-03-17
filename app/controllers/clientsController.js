let mysql=require('../../db/mysql');
let client=require('../models/client');
module.exports = {
    create:(req,res) => { //Crear un nuevo cliente
      console.log(req.body);
      mysql.query('insert into client SET ?',req.body,(err,rows,fields)=>{
          if(!err)
          res.json(rows);
          else
          res.json(err);
      })  
    },

    list:(req,res)=>{ //listar informacion de los clientes
        mysql.query('select * from client',(err,rows,fields)=>{
            if (!err)
                res.json(rows);
            else
                res.json(err);
        })
    },

    find:(req,res)=>{ 
        mysql.query('select * from client where id=?', req.params.id,(err,row,fields)=>{
            if(!err)
                res.json(rows);
            else
                res.json(err);
        }) 
    }

};