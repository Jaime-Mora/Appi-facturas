let mysql=require('../../db/mysql');
let invoice=require('../models/invoice');
module.exports = {
   create:(req,res)=>{
      //{date, total, amount, products[id_product, quantity, cost]}
      console.log(req.body);
      //console.log(JSON.parse(req.body));
      //JSON.parse(req.body.products).forEach(element => {
      //res.json({texto:'mensaje'});
      mysql.query('insert into invoice (date, payment, tax, customer_id) values(?,?,?,?)',[req.body.date , req.body.payment , req.body.tax , req.body.costumer_id] ,
         (err,rows,fields)=>{
         if(!err){
            //res.json(rows);
            let cad = "insert into invoice_detail (invoice_id, product_id, quantity, cost) values";
            for (let i=0; i<req.body.products.length;i++ ){
               const prod = req.body.products[i];
               cad+= `(${rows.insertId},${prod.product_id},${prod.quantity},${prod.cost})`;
               if(i==req.body.products.length-1)
               cad+= ';';
               else{
                  cad+=',';
               }
            }
           console.log(cad)
            mysql.query(cad,(err,rows,fields)=>{
               if (!err)
                  res.json(rows);
               else
                  res.json(err);
            })
      
         }else
            res.json(err);
      })
   },
   list:(req,res)=>{  //modifca el "list"
      mysql.query('SELECT * FROM `invoice`',(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   find:(req,res)=>{
      mysql.query('select * from order o inner join order_details d on o.id=d.order_id where o.id=?',req.params.id,(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   }
}