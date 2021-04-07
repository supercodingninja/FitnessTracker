// INSTALL YOUR PACKAGES. //
const mongoose = require("mongoose");


// CALL THE WORKOUT SCHEMA, CHIEF! //
const Schema = mongoose.Schema;

// Here comes the craziness.  You need to create more objects, that each have their own properties; and each of those properties have multiple values.  DON'T GO ROGUE: PAY ATTENTION TO THE DEVELOPED CODE (See .html files) //
// See exercise.html. //
const workoutSchema = new Schema ({
        
    day: {
    
        type: Date,
    
        defualt: () => new Date()
    
    },

        exercise: [{
                
            type: {
            
                type: String,
            
                // Ref. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim //
                trim: true,
            
                required: "Exercise type"
            
            },

                // Exercise Name, See Ln 50 exercise.html //
                name: {

                    type:String,

                    trim: true,

                    required: "Exercise name"

                },

                duration: {

                    type: Number,

                    required: "Duration in minutes"

                },

                weight: {

                    type: Number

                },

                reps: {

                    type: Number

                },

                sets: {

                    type: Number

                },

                distance: {

                    type: Number

                }
        } ]
    },
);


// YOU DID NOT PROPERLY EXPORT THE MODULE: I never defined it. //
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;



