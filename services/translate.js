// const translate = require('google-translate-api');
const {translate} = require('@vitalets/google-translate-api');
// using @vitalets/google-translate-api which is a free NodeJS alternative to @google-cloud/translate
// much like googletrans for Python

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