const express = require('express');
const router = express.Router();
const conferenceController = require('../controllers/conferenceController');

module.exports = function () {
    router.post('/create', conferenceController.createConference);
    router.get('/', conferenceController.getAllConferences);
    router.get('/:id', conferenceController.getConferenceById);
    return router;
}