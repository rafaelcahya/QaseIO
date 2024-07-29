const axios = require("axios");

const TOKEN =
    "60bde2f2ebe5781662f2dd1eca81411215fc635faa4f0c1c08539793c007cf1c";
const API_ENDPOINT = "https://api.qase.io/v1/case/PCM2";

    axios
        .get(`${API_ENDPOINT}`, {
            params: {limit: '10', offset: '0'},
            headers: {
                Token: TOKEN,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(
                
                error
            );
        });
