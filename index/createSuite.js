const axios = require("axios");

const TOKEN =
    "60bde2f2ebe5781662f2dd1eca81411215fc635faa4f0c1c08539793c007cf1c";
const API_ENDPOINT = "https://api.qase.io/v1/suite/CMS";

const requestData = {
    data: {
        title: 'Empty Email',
        suites: [
            {
                id: 178,
                position: 1,
                title: "Component"
            },
            {
                id: 179,
                position: 2,
                title: "Behaviour"
            },
        ],
    }
};

axios
    .post(`${API_ENDPOINT}`, requestData, {
        headers: {
            TOKEN: TOKEN,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        console.log(`Suite is successfully created`);
    })
    .catch((error) => {
        console.error(`Test case is failed to create`, error.response.data);
    });
