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
    translations : { // a map
        bn : {
            question_bn : String,
            answer_bn : String
        },
        hi : {
            question_hi : String,
            answer_hi : String
        }
    }
});

// to get translated text dynamically
faqSchema.methods.getTranslation = function (lang = "en") {
    // return this.translations[lang] || this.translations["en"];
    if(lang === "en"){ 
        return {
            question : this.question,
            answer : this.answer
        }
    }
    return this.translations[lang];
};

module.exports = mongoose.model("faq", faqSchema);
