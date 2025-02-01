// const translate = require('google-translate-api');
const {translate} = require('@vitalets/google-translate-api');

const translateText = async (text, target_language) => {
    try {
        const translation = await translate(text,{to : target_language});
        console.log(translation)
        return translation.text;
    } catch (err) {
        console.error(err);
        return text;
    }
}

module.exports = translateText;