const faq = require('../models/faq');

const create_faq = async (req,res) =>{
    try{
        const {question, answer} = req.body;
        const newfaq = new faq({
            question, answer 
        })
        
        res.status.json(newfaq);
    } catch(err){
        console.log(err.message);
    }
    // res.status(200).json('hello');
}

module.exports = create_faq;