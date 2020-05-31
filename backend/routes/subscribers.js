const router = require('express').Router();
let Subscriber = require("../models/subscriber.model");

router.route('/').get((req, res) => {
    Subscriber.find()
        .then(Subscribers => res.json(Subscribers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const email = req.body.email;

    const newSub = new Subscriber({email});

    newSub.save()
        .then(() => res.json('New Subscriber Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;