const Conference = require('../models/conferenceModel');

const createConference = async (req, res) => {
    if (req.body) {
        const conference = new Conference(req.body);
        //console.log(req.body);
        conference.save()
            // try{
            //     conference.save();
            //     console.log("Save");

            // }catch(e){
            //    console.error(e);
            // }
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllConferences = async (req, res) => {
    await Conference.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getConferenceById = async (req, res) => {
    if (req.params && req.params.id) {
        await Conference.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: response.vehicle });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


module.exports = {
    createConference,
    getAllConferences,
    getConferenceById
};
