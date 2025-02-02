//
const { translate } = require("@vitalets/google-translate-api");
// using @vitalets/google-translate-api which is a free NodeJS alternative to @google-cloud/translate
// much like googletrans for Python

const http = require('http');
const { HttpProxyAgent } = require('http-proxy-agent');

// a list of proxy so that API rate limit of @vitalets/google-translate-api isnt reached
// https://free-proxy-list.net/
// Available proxy list > (with anonymous in *Anonymity and yes in Google columns).
const proxyList = [
    '23.247.137.142:80',
    '23.247.136.254:80',
    '180.210.89.215:3128',
    '51.89.255.67:80',
    '110.143.204.150:8888'
];


const translateText = async (text, target_language) => {
    try {
        const randomProxy = proxyList[Math.floor(Math.random() * proxyList.length)];

        const temp = 'http://';
        const temp_agent = temp.concat(randomProxy);
        let agent;
        
        agent = new HttpProxyAgent(temp_agent);
        // for custom proxy
        // const agent = new HttpProxyAgent('http://110.143.204.150:8888');

        // translate using proxy
        const translation = await translate(text, { 
            to: target_language,
            fetchOptions :{ agent },
        });
        return translation.text;
    } catch (err) {
        console.error(err);
        return text;
    }
};

module.exports = translateText;
