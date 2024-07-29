const axios = require("axios");

const TOKEN =
    "60bde2f2ebe5781662f2dd1eca81411215fc635faa4f0c1c08539793c007cf1c";
const API_ENDPOINT = "https://api.qase.io/v1/case/MT";

const requestData = {
    preconditions: "Account 'Tenant' (create new account tenant on CMS)",
};

for (let id = 51; id <= 53; id++) {
    axios
        .patch(`${API_ENDPOINT}/${id}`, requestData, {
            headers: {
                Token: TOKEN,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(`Updated preconditions for id: ${id}`);
        })
        .catch((error) => {
            console.error(
                `Failed to update preconditions for id: ${id}`,
                error.response.data
            );
        });
}
