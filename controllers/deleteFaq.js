// const Faq = require('../models/faq')

const delete_faq = async (req,res) => {
    try {
        await res.faq.deleteOne(); 
        // res.faq is Faq.findById(req.params.id);
        res.status(200).json({
            message : "user deleted"
        })
    } catch (err){
        console.log(err);
        res.status(500).json({
            error : err.message
        })
    }
}
module.exports = delete_faq;