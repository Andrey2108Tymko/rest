const axios = require('axios');

module.exports = (data) => {
    return new Promise((resolve) => {
        data.config.data = JSON.stringify(data.body);
        axios(data.config)
            .then(function(response) {
                data.response = response.data;
            	delete data.config;
            	delete data.body;
                resolve(data);
            })
            .catch(function(error) {
                data.error = error;
                resolve(data);
            });
    });
};
