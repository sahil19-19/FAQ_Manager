const Faq = require('../models/faq');
const translateText = require('../services/translate')
const redisClient = require('../config/redis')

const create_faq = async (req,res) =>{
    try{
        const {question, answer} = req.body;
        const translations = {
            bn : {
                question_bn : await translateText(question,"bn"),
                answer_bn : await translateText(answer,"bn")
            },
            hi : {
                question_hi : await translateText(question,"hi"),
                answer_hi : await translateText(answer,"hi")
            }
        };

        const new_faq = new Faq({
            question, answer , translations
        })
        const curfaq = await new_faq.save();

        // deleting keys in cache
        const supported_languages = [
            'en',
            'hi',
            'bn'
        ]

        supported_languages.forEach(language => {
            redisClient.del(`faqs:${language}`)
        });

        res.status(201).json(curfaq);
    } catch(err){
        res.status(400).json({
            error : err.message
        })
    }
}

module.exports = create_faq;