'use strict';

const router = require('express').Router();
const db = require('../models/workout.js');


//  Use Ref. https://mongoosejs.com/docs/validation.html //
// C. R. U. D.!  Think GET: "Read".  Think about what you have to next. //
router.get('/api/workouts', (req, res) => {
    
    db.find()
    
    .then(workoutData => {
    
        res.json(workoutData);
    
    })
    
    .catch(err => {
    
        res.json(err);
    
    });
});


// C. R. U. D.!  Think PUT: "Update"! //
router.put('/api/workouts/:id', ({ body, params }, res) => {
   
    workOut.update(
   
        params.id,
   
        { $push: { exercises: body } },
   
        // Use Ref. https://mongoosejs.com/docs/validation.html#update-validators //
        { new: true, runValidators: true }
   
    )
   
    .then(workoutData => {

        res.json(workoutData);

    })

    .catch(err => {

        res.json(err);

    });
});


// C. R. U. D.!  Think CREATE: "Create"! //
router.post('/api/workouts', (req, res) => {
    
    workout.create({})
    
    .then(workoutData => {
    
        res.json(workoutData);
    
    })
    
    .catch(err => {
    
        res.json(err);
    
    });
});


// Need Ranges. //
router.get('/api/workouts/range', (res) => {

    workout.find({}).limit(10)

    .then(workoutData => {

        res.json(workoutData);

    })

    .catch(err => {

        res.json(err);

    });
});


// C. R. U. D.!  Think: You're  to need DELETE: "Delete! //"
router.delete('/api/workouts', ({ body }, res) => {
 
    workout.delete(body.id)
 
    .then(() => {
 
        res.json(true);
 
    })
 
    .catch(err => {
 
        res.json(err);
 
    });
});

module.exports = router;