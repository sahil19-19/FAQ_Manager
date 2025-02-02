const redisClient = require('../config/redis')

const delete_faq = async (req,res) => {
    try {
        await res.faq.deleteOne();
        const {id} = req.params;
        // res.faq is Faq.findById(req.params.id);

        // deleting keys in cache
        const supported_languages = [
            'en',
            'hi',
            'bn'
        ]
        supported_languages.forEach(language => {
            redisClient.del(`faqs:${language}`)
            redisClient.del(`faqs:${id}${language}`)
        });
        
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