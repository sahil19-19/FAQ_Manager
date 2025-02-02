// get 1 FAQ by id

const redisClient = require('../config/redis')
const DEFAULT_EXPIRATION = 3600 //(1 hour)

const get_one_faq = async (req,res) => {
    try {
        const lang = req.query.lang || "en";
        // console.log(lang);
        const id = req.params.id;
        
        const redis_key = `faqs:${id}${lang}`; 

        const result = await redisClient.get(redis_key);
        if(result != null){
            console.log('cache hit');
            return res.status(200).json(JSON.parse(result));
        }
        
        const translated_faq = res.faq.getTranslation(lang);

        // setting a key value pair in redis
        await redisClient.setEx(redis_key, DEFAULT_EXPIRATION  , JSON.stringify(translated_faq));

        res.status(200).json(translated_faq);
    } catch (err){
        // console.log(err);
        res.status(500).json({
            error : err.message
        })
    }
}
module.exports = get_one_faq;