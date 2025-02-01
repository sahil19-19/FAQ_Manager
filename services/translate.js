// const translate = require('google-translate-api');
const { translate } = require("@vitalets/google-translate-api");
// using @vitalets/google-translate-api which is a free NodeJS alternative to @google-cloud/translate
// much like googletrans for Python
// const http = require('http');
// const { HttpProxyAgent } = require('http-proxy-agent');
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const proxyList = [

]

const translateText = async (text, target_language) => {
    try {
        // delay(2000);
        // const agent = "http://user2:pass2@proxy2.com:3128";

        // const translation = await translate(text, { 
        //     to: target_language,
        // });
        // const translation = await translate(text, { 
        //     to: target_language,
        //     fetchOptions : agent,
        // });
        // console.log(translation);
        // return translation.text;
    } catch (err) {
        console.error(err);
        return text;
    }
};

module.exports = translateText;
