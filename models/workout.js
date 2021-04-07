const mongoose = require("mongoose")

const workoutSchema = mongoose.Schema({
    
    day: {
        
        type: Date,
        
        default:  () => new Date()
    
    },


    // Here comes the craziness.  You need to create more objects, that each have their own properties; and each of those properties have multiple values.  DON'T GO ROGUE: PAY ATTENTION TO THE DEVELOPED CODE (See .html files) //
    // See exercise.html. //
    exercises: {

        type: {

            type: String,
            
            // Ref. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim //
            trim: true,

            required: 'Exercise Type:'

        },

        cardioName: {

            type: String,
            
            trim: true,

            required: 'Name'

        },

        distance: {

            type: Number,

        },

        duration: {

            type: Number,

        },

        // Exercise Name, See Ln 50 exercise.html //
        name: {

            type: String,

            trim: true,

            required: 'name:'

        },

        weight: {

            type: Number,

        },

        sets: {

            type: Number

        },

        resistanceDuration: {

            Number

        }

    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;