const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item')

//@route GET api/item
//@desc GET ALL Items
//@access PUblic
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1})
        .then(item => res.json(items));
})

module.exports = router;