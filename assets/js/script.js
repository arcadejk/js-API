const API_KEY = "jDHZZaCLttQpDgBcwUWayhGUzpw";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {
    const form = new FormData(document.getElementById("checksform"));

    for (let e of form.entries()) {
        console.log(e);
    }
}

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {

    let heading = "API Key Status";
    let results1 = `Your key is valid until`;
    let results2 =`${data.expiry}`;
    
    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results1-content").innerText = results1;
    document.getElementById("results2-content").innerText = results2;
    
    resultsModal.show();
}