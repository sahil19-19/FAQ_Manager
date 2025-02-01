const mongoose = require("mongoose");
const Faq = require('../models/faq')

const get_faq = async (req, res) => {
    try {
        const {lang} = req.query || "en";
        const faqs = await Faq.find();
        const translated_faqs = faqs.map(faq => faq.getTranslation(lang));
        res.status(200).json(translated_faqs);
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message);
    }
};

module.exports = get_faq