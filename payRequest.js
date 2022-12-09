module.exports = (data) => {
     data.response = await fetch("https://secure.payu.com/api/v2_1/orders", {
  method: 'POST',
  headers: {
    "Authorization": `Bearer ${data.access_token}`
  },
  body: `{
    "notifyUrl": "https://www.corezoid.com/api/2/json/public/1152651/b729e721a9550550cd43337896e085fb222cd252",
    "customerIp": "127.0.0.1",
    "merchantPosId": "4279587",
    "description": "RTV market",
    "currencyCode": "PLN",
    "totalAmount": "21000",
    "extOrderId": "ryz72gmiyh331iepnsh68j",
    "validityTime": "86400",
    "buyer": {
        "email": "john.doe@example.com",
        "phone": "654111654",
        "firstName": "John",
        "lastName": "Doe",
        "language": "pl"
    },
    "products": [
        {
            "name": "Wireless Mouse for Laptop",
            "unitPrice": "15000",
            "quantity": "1"
        },
        {
            "name": "HDMI cable",
            "unitPrice": "6000",
            "quantity": "1"
        }
    ]
}`,
});

response.json().then(data => {
  console.log(data);
});


    return data;
};
