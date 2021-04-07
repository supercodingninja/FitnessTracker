'use strict';

// This is where you need to remember that weird name for a middleware request, "Morgan."  See Ref. https://www.npmjs.com/package/morgan This is the HTTP request logger middleware for node.js).
const logger = require('morgan');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;


// See Ref. https://gist.github.com/leommoore/7524073 //
app.use(logger('dev'));
app.use(require('./routes/htmlRoutes.js'));
app.use(require('./routes/apiRoutes.js'));
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost/workout', {

    useNewUrlParser: true,

});


app.listen(PORT, () => {
  
    console.log(`App running on port ${PORT}!`);

});
