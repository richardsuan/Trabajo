const express = require('express');
const router = express.Router();
const pool =require('../database');
router.get('/producto',(req,res)=>{
    //res.render('autenticacion/autenticacion_2');//nombre del archivo
    res.send('producto');
});
router.post('/insertar_producto',async (req,res)=>{
    //console.log(req.body);
    const {id,producto,catidad,descripcion}=req.body;
    const newlink={
        id, 
        producto,
        catidad,
        descripcion
    };
    console.log(newlink);
    pool.query('INSERT INTO productos set ?',[newlink]);
    res.send(newlink);
});
router.post('/ensenar_producto',async (req,res)=>{
    //console.log(req.body);
    await pool.query("SELECT *")
});




module.exports=router;
