const Faq = require('../models/faq');
const translateText = require('../services/translate')

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

        const newfaq = new Faq({
            question, answer , translations
        })
        const curfaq = await newfaq.save();
        res.status(201).json(curfaq);
    } catch(err){
        res.status(400).json({
            error : err.message
        })
    }
}

module.exports = create_faq;