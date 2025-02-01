// get 1 FAQ by id

const get_one_faq = async (req,res) => {
    try {
        
    } catch (err){
        // console.log(err);
        res.status(500).json({
            error : err.message
        })
    }
}
module.exports = get_one_faq;