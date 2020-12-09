import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

//Generic

const router = express.Router();

export const example = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select

router.get('/selectTest', function(req, res) {
    const queryString = `SELECT * FROM testdatabase.selecttest`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

//Insert

router.post('/insertTest', function(req, res) {
    const queryString = `INSERT INTO testdatabase.inserttest(testinsert) VALUES('${req.body.data}')`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

//Update

router.put('/updateTest', function(req, res) {
    const queryString = `UPDATE updatetest set testupdate = '${req.body.data}' where Id = '${req.body.id}'`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});