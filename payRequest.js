import fetch from "node-fetch";
module.exports = (data) => {
    
fetch('https://secure.payu.com/api/v2_1/orders', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 3014c010-1134-4a4f-b077-71d56af25f0d',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    "notifyUrl": "https://www.corezoid.com/api/2/json/public/1152651/b729e721a9550550cd43337896e085fb222cd252",
    "customerIp": "127.0.0.1",
    "merchantPosId": "4279587",
    "description": "RTV market",
    "currencyCode": "PLN",
    "totalAmount": "21000",
    "extOrderId": "ryz72g2iyh231iepnsh68j",
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
})
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
    data.response = response;
    return data;
};
