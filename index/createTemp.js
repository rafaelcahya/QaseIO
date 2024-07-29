const axios = require("axios");
const fs = require("fs");
const path = require("path");

const TOKEN =
    "5dfb5b2d26fc827bf151d0de994064a0e0a25e55a84384dd3aefda51873e1fe2";
const API_ENDPOINT = "https://api.qase.io/v1/case/DEMO/bulk";

// Request data
const requestData = {
    cases: [
        {
            title: "Internal CS Role",
            description:
                "Verify that when a user logs in with the Internal CS role and already assigned to Agent WS, user can access several menu",
            preconditions:
                "1. The user has account and assigned to Agent WS\n2. The user is on the CMS Login page\n3. The user is already login CMS",
            postconditions: "The user should be able to access several menu",
            behavior: 2,
            steps: [
                {
                    action: "See the menu on sidebar",
                    expected_result: "See the menu on sidebar",
                    data: "Plate number data: B 133 ABS",
                },
            ],
        },
    ],
};

axios
    .post(API_ENDPOINT, requestData, {
        headers: {
            TOKEN: TOKEN,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        console.log(`Test case is successfully created`);

        // Get current date and time
        const now = new Date();
        const gmtOffset = now.getTimezoneOffset(); // in minutes
        const wibOffset = -420; // WIB is UTC+7, so -420 minutes from GMT
        const offsetMinutes = wibOffset - gmtOffset;

        now.setMinutes(now.getMinutes() + offsetMinutes);

        const options = {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        };
        
        // const formattedDate = now
        //     .toLocaleString("en-US", options)
        //     .replace(",", "");

        // Replace ':' with '-' in the formatted date. Windows doesn't allow colons in filenames.
        const formattedDate = now
            .toLocaleString("en-US", options)
            .replace(",", "")
            .replace(/:/g, "-");

        const fileName = `testcase ${formattedDate}.csv`;

        // Folder path
        const folderPath = path.join(__dirname, "csv"); // Correct path

        // Ensure the CSV folder exists
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log("CSV folder created:", folderPath);
        } else {
            console.log("CSV folder already exists:", folderPath);
        }

        // Full file path
        const filePath = path.join(folderPath, fileName); // Correct path

        // Convert response data to CSV
        const responseData = requestData.cases; // Use the request data for CSV export
        const csvData = convertToCSV(responseData);

        // Write CSV data to a file
        fs.writeFile(filePath, csvData, (err) => {
            if (err) {
                console.error("Failed to write CSV file", err);
            } else {
                console.log(
                    "CSV file has been saved in CSV folder with name =",
                    fileName
                );
            }
        });
    })
    .catch((error) => {
        console.error(
            `Test case is failed to create`,
            error.response ? error.response.data : error.message
        );
    });

function convertToCSV(objArray) {
    const array = Array.isArray(objArray) ? objArray : JSON.parse(objArray);
    let str = "";

    // Behavior mapping
    const behaviorMapping = {
        1: "not set",
        2: "positive",
        3: "negative",
        4: "destructive",
    };

    // Add v2.id to each case
    array.forEach((item, index) => {
        item["v2.id"] = index + 1; // Assign a unique v2.id based on the index
    });

    // Extract headers excluding 'steps' and adding 'v2.id' before 'title' and 'steps_actions', 'steps_result', 'steps_data'
    const headers =
        ["v2.id"]
            .concat(
                Object.keys(array[0]).filter(
                    (key) => key !== "steps" && key !== "title"
                )
            )
            .concat(["title", "steps_actions", "steps_result", "steps_data"])
            .join(",") + "\r\n";
    str += headers;

    // Extract rows
    for (let i = 0; i < array.length; i++) {
        const row = array[i];
        const baseFields = ["v2.id"]
            .concat(
                Object.keys(row).filter(
                    (key) => key !== "steps" && key !== "title"
                )
            )
            .map((key) => {
                if (key === "behavior") {
                    return JSON.stringify(behaviorMapping[row[key]]);
                } else if (key === "preconditions") {
                    return formatPreconditions(row[key]);
                } else {
                    return JSON.stringify(row[key]);
                }
            })
            .join(",");

        // Handle steps separately
        const steps = row.steps || [{}];
        for (let j = 0; j < steps.length; j++) {
            const step = steps[j];
            const steps_actions = `${j + 1}. ${
                step.action ? JSON.stringify(step.action) : ""
            }`;
            const steps_data = `${j + 1}. ${
                step.data ? JSON.stringify(step.data) : ""
            }`;
            const steps_result = `${j + 1}. ${
                step.expected_result ? JSON.stringify(step.expected_result) : ""
            }`;
            str += `${baseFields},"${row.title}",${steps_actions},${steps_result},${steps_data}\r\n`;
        }
    }
    return str;
}

function formatPreconditions(preconditions) {
    // Replace newline characters with a line break inside CSV cell
    return `"${preconditions
        .split("\n")
        .map((line) => line.trim())
        .join("\n")}"`;
}
