const axios = require("axios");

const TOKEN =
    "60bde2f2ebe5781662f2dd1eca81411215fc635faa4f0c1c08539793c007cf1c";
const API_ENDPOINT = "https://api.qase.io/v1/case/PAO2";

const requestData = {
    preconditions:"\n![WhatsApp Image 2024-02-12 at 15.58.01 (1).jpeg](https:\/\/d2cxucsjd6xvsd.cloudfront.net\/public\/team\/602608e24c972c01160bab7f61e18a9e8b194eb0\/attachment\/d2fb439f693c5e3eeffaa572428b13477b79686d\/WhatsApp%20Image%202024-02-12%20at%2015.58.01%20%281%29.jpeg)"
}

const uniqueIds = [1984];

uniqueIds.forEach((id) => {
    axios
        .patch(`${API_ENDPOINT}/${id}`, requestData, {
            headers: {
                Token: TOKEN,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(`Updated for id: ${id}`);
        })
        .catch((error) => {
            console.error(
                `Failed to update preconditions for id: ${id}`,
                error.response.data
            );
        });
});
