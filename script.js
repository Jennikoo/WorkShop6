// Exercise 1: Parse embedded XML data
function parseData() {
    const xmlData = `
        <quotes>
            <quote>
                <text>I'm not concerned about all hell breaking loose...</text>
                <author>George Carlin</author>
            </quote>
            <quote>
                <text>The biggest problem with every art...</text>
                <author>Johann Wolfgang von Goethe</author>
            </quote>
        </quotes>
    `;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "text/xml");

    const quotes = xmlDoc.getElementsByTagName("quote");
    let output = "";
    for (let i = 0; i < quotes.length; i++) {
        const text = quotes[i].getElementsByTagName("text")[0].childNodes[0].nodeValue;
        const author = quotes[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
        output += `<p><strong>${author}:</strong> ${text}</p>`;
    }

    document.getElementById("parsedData").innerHTML = output;
}

// Exercise 2: AJAX call to load XML file
function loadXMLDoc() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "data/famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        }
    };
}

// Exercise 3: Parse XML and display in a table
function parseXMLAndDisplayInTable(xmlData) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "text/xml");

    const quotes = xmlDoc.getElementsByTagName("quote");
    let tableBody = "";
    for (let i = 0; i < quotes.length; i++) {
        const text = quotes[i].getElementsByTagName("text")[0].childNodes[0].nodeValue;
        const author = quotes[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
        tableBody += `<tr><td>${text}</td><td>${author}</td></tr>`;
    }

    document.getElementById("tableBody").innerHTML = tableBody;
}

function testFunction() {
    alert("Button clicked!");
}
