const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

router.get("/movies" , function(req, res) {
    const movies=['The Shining','Incendies','Rang de Basanti','Finding Nemo']
    res.send(movies)
})


router.get("/movies/:indexNumber" , function(req, res) {
    const value=req.params.indexNumber
    const movies=['The Shining','Incendies','Rang de Basanti','Finding Nemo']
    res.send(movies[value]);
    
})


router.get('/movies2/:index' , function(req, res) {
    const value=req.params.index;
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','The Shining',"Titanic","Shutter Island","Pans Labyrinth","Wrath of Titans","Edge of Tommorrow"];
    if(value<movies.length){
        res.send(movies[value]);
    }else{
        res.send("Index Number Does not Exist");
    }
});

     router.get("/films",function(req,res){
     const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }];
    res.send(film)
       
});

router.get("/films/:indexID",function(req,res){
    let value=req.params.indexID;
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }];
    if(value<film.length){
        res.send(film[value]);
    }else{
        res.send("don't exist")
    }
       
});

module.exports = router;