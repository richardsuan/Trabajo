const express = require('express');
const router = express.Router();
const pool =require('../database');
router.get('/inicio',(req,res)=>{
    //res.render('autenticacion/autenticacion_2');//nombre del archivo
    res.send('inicio');
});
router.post('/inicio',async (req,res)=>{
    //console.log(req.body);
    const {id,compras,username,password_user}=req.body;
    const newlink={
        id, 
        compras,
        username,
        password_user
    };
    console.log(newlink);
    await pool.query('INSERT INTO user set ?',[newlink]);
    res.send(newlink);
    
});



module.exports=router;
