const conexion = require('../../config/dbConnection');
const mysql = require('../../config/dbConnection');
const DB = mysql.db;

const msupdate={
    code: 200,
    ms:"se actualizo con éxito"
}

const mscreate={
    code: 200,
    ms:"se creó con éxito"
}

const msdelete={
    code: 200,
    ms:"se eliminó con éxito"
}

//permite actualizar los datos de la tabla loc de la BD location
exports.updateLocation = (req, res, next) =>{
    conexion.query("UPDATE LOC SET name = ?, area_m2 = ? WHERE id = ? ", [req.body.name, req.body.area_m2, req.body.id], (err, rows, fields) => {
        if(err){
            console.log("error: ", err);
            return err;
        } 
        
        if(rows.affectedRows == 0){
            console.log("no se encontró el usuario ");
            return ;
        }
        return res.status(200).send(msupdate);
    }); 
}

//permite consultar los datos de la tabla loc de la BD location
exports.findLocations = (req, res, next)=>{
    conexion.query("SELECT *FROM loc", (err, rows, fields) => {
        if(err){
            console.log("error: ", err);
            return err;
        } else{
            return res.json(rows);
        }
    }); 
}

//permite actualizar los datos de la tabla loc de la BD location
exports.createLocation = (req, res, next) =>{
    conexion.query("INSERT INTO LOC SET ?", req.body, (err, rows, fields) => {
        if(err){
            console.log("error: ", err);
            return err;
        } 
        return res.status(200).send(mscreate);
    }); 
}

//permite eliminar un dato de la tabla loc de la BD location
exports.deleteLocation = (req, res, next) =>{
    conexion.query("DELETE FROM LOC WHERE id = ? ", req.params.id, (err, rows, fields) => {
        if(err){
            console.log("error: ", err);
            return err;
        } 

        if(rows.affectedRows == 0){
            console.log("no se encontró el usuario ");
            return ;
        }

        return res.status(200).send(msdelete);
    });
}    

//permite consultar un dato de la tabla loc de la BD location por el id
exports.findByID = (req, res, next)=>{
    conexion.query(`SELECT *FROM loc WHERE id = ${req.params.id}`, (err, rows, fields) => {
        if(err){
            console.log("error: ", err);
            return err;
        } else{
            return res.json(rows);
        }
    }); 
}
