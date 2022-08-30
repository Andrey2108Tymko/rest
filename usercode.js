const hmacmd5 = require("crypto-js/hmac-md5");


module.exports = (data) => {
    data.sign = hmacmd5(data.stringToHash, data.secret).toString(); 
    return data;
};
