// Somehow I messed up my functions trying to insert relavent documentation that I saw fit to remember.  //
// I'm going to need to practice my API routes more; and I should paid closer atention to the pre-developed code; which had similar names for their files, yet different extensions.  I'm just glad that it at least works, locally, on my machine.  I'm having difficulty getting any app to deplot to Heroku, today. //



const db = require("../models/workout.js");
const router = require("express").Router();



router.get("/api/workouts", (req, res) => {
  
    db.find()
  
    .then(dbWorkouts => {
  
        res.json(dbWorkouts);
  
    })
  
    .catch(err => {
  
        res.json(err);
  
    });
});




router.put("/api/workouts/:id", ({ body, params }, res) => {

    db.findByIdAndUpdate(

        params.id,

        { $push: { exercises: body } },

        { new: true, runValidators: true }
    )

    .then(dbWorkout => {

        res.json(dbWorkout);

    })

    .catch(err => {

        res.json(err);

    });
});



router.post("/api/workouts", (req, res) => {
  
    db.create({})
  
    .then(dbWorkout => {
  
        res.json(dbWorkout);
  
    })
  
    .catch(err => {
  
        res.json(err);
  
    });
});




router.get("/api/workouts/range", (req, res) => {
  
    db.find({}).limit(10)
  
    .then(dbWorkouts => {
  
        res.json(dbWorkouts);
  
    })
  
    .catch(err => {
  
        res.json(err);
  
    });
});




router.delete("/api/workouts", ({ body }, res) => {
  
    db.findByIdAndDelete(body.id)
  
    .then(() => {
  
        res.json(true);
  
    })
  
    .catch(err => {
  
        res.json(err);
  
    });
  });



module.exports = router;