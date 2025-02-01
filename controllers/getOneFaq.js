// get 1 FAQ by id

const get_one_faq = async (req,res) => {
    try {
        const {lang} = req.query || "en";
        const translated_faq = res.faq.getTranslation(lang);
        res.status(200).json(translated_faq);
    } catch (err){
        // console.log(err);
        res.status(500).json({
            error : err.message
        })
    }
}
module.exports = get_one_faq;