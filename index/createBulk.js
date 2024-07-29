const axios = require("axios");

const TOKEN =
    "60bde2f2ebe5781662f2dd1eca81411215fc635faa4f0c1c08539793c007cf1c";
const API_ENDPOINT = "https://api.qase.io/v1/case/CMS/bulk";

const requestData = {
    cases: [
        {   
            behavior: 2,
            priority: 2,
            title: "Internal CS Role",
            description: "Verify that when a user logs in with the Internal CS role and already assigned to Agent WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Agent WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal CS Role",
            description: "Verify that when a user logs in with the Internal CS role and already assigned to Onstreet WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Onstreet WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal CS Role",
            description: "Verify that when a user logs in with the Internal CS role and already assigned to Ezitama WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Onstreet WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Support Role",
            description: "Verify that when a user logs in with the Internal Support role and already assigned to Agent WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Agent WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Support Role",
            description: "Verify that when a user logs in with the Internal Support role and already assigned to Onstreet WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Onstreet WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Support Role",
            description: "Verify that when a user logs in with the Internal Support role and already assigned to Ezitama WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Ezitama WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Marketing Role",
            description: "Verify that when a user logs in with the Internal Marketing role and already assigned to Agent WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Agent WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Marketing Role",
            description: "Verify that when a user logs in with the Internal Marketing role and already assigned to Onstreet WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Onstreet WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Marketing Role",
            description: "Verify that when a user logs in with the Internal Marketing role and already assigned to Ezitama WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Ezitama WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Financee Role",
            description: "Verify that when a user logs in with the Internal Financee role and already assigned to Agent WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Agent WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Financee Role",
            description: "Verify that when a user logs in with the Internal Financee role and already assigned to Onstreet WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Onstreet WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Internal Financee Role",
            description: "Verify that when a user logs in with the Internal Financee role and already assigned to Ezitama WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Ezitama WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Wuzz Role",
            description: "Verify that when a user logs in with the Admin Wuzz role and already assigned to Agent WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Agent WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Wuzz Role",
            description: "Verify that when a user logs in with the Admin Wuzz role and already assigned to Onstreet WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Onstreet WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Wuzz Role",
            description: "Verify that when a user logs in with the Admin Wuzz role and already assigned to Ezitama WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Ezitama WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Parkee Meed Role",
            description: "Verify that when a user logs in with the Admin Parkee Meed role and already assigned to Agent WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Agent WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Parkee Meed Role",
            description: "Verify that when a user logs in with the Admin Parkee Meed role and already assigned to Onstreet WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Onstreet WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Parkee Meed Role",
            description: "Verify that when a user logs in with the Admin Parkee Meed role and already assigned to Ezitama WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Ezitama WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Parkee Meed Role",
            description: "Verify that when a user logs in with the Admin Parkee Meed role and already assigned to Agent WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Agent WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Parkee Meed Role",
            description: "Verify that when a user logs in with the Admin Parkee Meed role and already assigned to Onstreet WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Onstreet WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
        {   
            behavior: 2,
            priority: 2,
            title: "Admin Parkee Meed Role",
            description: "Verify that when a user logs in with the Admin Parkee Meed role and already assigned to Ezitama WS, user can access several menu",
            preconditions: "1. The user has account and assigned to Ezitama WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result:""
                    ,
                },
            ],
        },
    ]
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
        console.log(`Test case is successfully created`);
    })
    .catch((error) => {
        console.error(`Test case is failed to create`, error.response.data);
    });
