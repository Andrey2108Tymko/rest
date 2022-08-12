const hmacmd5 = require("crypto-js/hmac-md5");

module.exports = (data) => {
    data.res = hmacmd5(data.text, data.secret).toString(); 
    
    return data;
};
