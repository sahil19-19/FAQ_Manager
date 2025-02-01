const mongoose = require("mongoose");
const Faq = require('../models/faq')

const get_faq = async (req, res) => {
    try {
        const result = await Faq.find();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = get_faq