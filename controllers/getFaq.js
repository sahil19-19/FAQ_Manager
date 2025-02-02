const mongoose = require("mongoose");
const redisClient = require('../config/redis')
const Faq = require('../models/faq')
const DEFAULT_EXPIRATION = 3600 //(1 hour)

const get_faq = async (req, res) => {
    try {
        const lang = req.query.lang || "en";
        const redis_key = `faqs:${lang}`; // key to map all faqs in a perticular language

        const result = await redisClient.get(redis_key);
        if(result != null){
            console.log('cache hit');
            return res.status(200).json(JSON.parse(result));
        }

        const faqs = await Faq.find();
        const translated_faqs = faqs.map(faq => faq.getTranslation(lang));

        // setting a key value pair in redis
        await redisClient.setEx(redis_key, DEFAULT_EXPIRATION  , JSON.stringify(translated_faqs));
        res.status(200).json(translated_faqs);
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message);
    }
};

module.exports = get_faq