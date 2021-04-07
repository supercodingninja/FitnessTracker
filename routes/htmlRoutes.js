'use strict';

// Think!  What have we not done...Set up the path to the document! //
const path = require('path');
const router = require('express').Router();


// This should render all stats to the document. //
router.get('./stats'), (res) => {

    res.sendFile(path.join(__dirname, '../public/stats.html'));

};


// I need to get the exercises displayed. //
router.get('../public/exercise.js'), (res) => {

    res.sendFile(path.join(__dirname, '../public/exercise.html'));

};

module.exports = router;