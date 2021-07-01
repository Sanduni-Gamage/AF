const express = require('express');
const router = express.Router();
const Presenter = require('../models/presenterModel');
const auth = require('../middleware/auth');

// @url           GET /presenter/
// @description   get all presenters
// @access-mode   private
router.get('/', auth, async (req, res) => {
    try {
        const users = await Presenter.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('server error');
        console.log(err.message);
    }
})

// @url           PUT /presenter/:id
// @description   update presenter
// @access-mode   private
router.put('/:id', auth, async (req, res) => {
    const { firstName, lastName, contactNumber, username, university, department } = req.body

    //build user object
    const userFields = {};
    if (firstName) userFields.firstName = firstName;
    if (lastName) userFields.lastName = lastName;
    if (contactNumber) userFields.contactNumber = contactNumber;
    if (username) userFields.username = username;
    if (university) userFields.university = university;
    if (department) userFields.department = department;

    try {
        let user = await Presenter.findById(req.params.id);

        if (!firstName && !lastName && !contactNumber && !username && !university && !department)
            return res.status(400).json({
                errorMessage: "You need to update at least a input field",
            });

        {/*if (firstName.length < 3)
            return res.status(400).json({
                errorMessage: "Please enter a first name of at least 3 characters.",
            });

        if (lastName.length < 3)
            return res.status(400).json({
                errorMessage: "Please enter a last name of at least 3 characters.",
            });

        if (contactNumber.length < 10)
            return res.status(400).json({
                errorMessage: "Please enter a mobile number of at least 10 characters.",
            });

        if (username.length < 0)
            return res.status(400).json({
                errorMessage: "Username must not be empty!!.",
            });

        if (university.length < 0)
            return res.status(400).json({
                errorMessage: "University must not be empty!!",
            });

        if (department.length < 0)
            return res.status(400).json({
                errorMessage: "Department must not be empty!!",
            });*/}

        if (!user) return res.status(404).json({
            msg: 'User not found'
        });

        user = await Presenter.findByIdAndUpdate(req.params.id,
            { $set: userFields },
            { new: true });
        res.json(user);

    } catch (err) {
        res.status(500).send(err.message)
        console.log(err.message)
    }
})

// @url           DELETE /presenter/:id
// @description   delete presenter
// @access-mode   private
router.delete('/:id', auth, async (req, res) => {
    try {
        let user = await Presenter.findById(req.params.id);

        if (!user) return res.status(404).json({
            msg: 'User not found'
        });

        await Presenter.findByIdAndRemove(req.params.id);
        res.json({ msg: 'User removed.' });
    } catch (err) {
        res.status(500).send(err.message)
        console.log(err.message)
    }
});

module.exports = router;
