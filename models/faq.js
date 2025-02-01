const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    }, // for WYSIWYG support
    question_bn: {
        type: String,
        required: true,
    },
    answer_bn: {
        type: String,
        required: true,
    },
    question_hi: {
        type: String,
        required: true,
    },
    answer_hi: {
        type: String,
        required: true,
    },
});

// to get translated text dynamically
faqSchema.methods.getTranslation = function (lang = "en") {
    // return this.translations[lang] || this.translations["en"];
    return this.translations[lang];
};

module.exports = mongoose.model("faq", faqSchema);
