const HmacMD5 = require("crypto-js/hmac-md5");


module.exports = (data) => {
    var secret = 'flk3409refn54t54t*FNJRET';
    data.sign = HmacMD5(JSON.stringify('test_merch_n1;www.market.ua;DH1660313179;1415379863;1547.36;UAH;Процессор Intel Core i5-4670 3.4GHz;Память Kingston DDR3-1600 4096MB PC3-12800;1;1;1000;547.36'), secret).toString();
    return data;
};
