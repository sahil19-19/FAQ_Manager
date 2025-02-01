// a middleware to get faq by id

const Faq = require("../models/faq");

const get_id = async (req, res, next) => {
    let faq;
    try {
        faq = await Faq.findById(req.params.id);
        if (faq == null) {
            return res.status(404).json({
                message: "couldnt find FAQ",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
    res.faq = faq;
    next();
};

module.exports = get_id;
