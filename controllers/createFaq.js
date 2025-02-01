const Faq = require('../models/faq');

const create_faq = async (req,res) =>{
    try{
        const {question, answer} = req.body;
        const newfaq = new Faq({
            question, answer 
        })
        const curfaq = await newfaq.save();
        res.status(201).json(curfaq);
    } catch(err){
        res.status(400).json({
            error : err.message
        })
        // console.log(err.message);
    }
    // res.status(200).json('hello');
}

module.exports = create_faq;