
// Function to parse the embedded XML data
function parseData() {
    // Get all 'quotes' elements from the document
    var quotes = document.getElementsByTagName("quotes");

    // Prepare a variable to store the output
    var output = '';

    // Loop through each 'quotes' element and get the quote and author
    for (var i = 0; i < quotes.length; i++) {
        var quoteText = quotes[i].getElementsByTagName("quote")[0].textContent; // Get the quote
        var authorText = quotes[i].getElementsByTagName("author")[0].textContent; // Get the author

        // Append the quote and author to the output
        output += '<p><strong>Quote:</strong> ' + quoteText + '<br>';
        output += '<strong>Author:</strong> ' + authorText + '</p>';
    }

    // Inject the output into the 'quotes' div
    document.getElementById("quotes").innerHTML = output; // Display parsed quotes
}


// Exercise 2: Load XML file via AJAX
function loadXMLFile() {
    var xmlhttp = new XMLHttpRequest(); // Create AJAX object
    xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true); // Specify the data URL
    xmlhttp.send(); // Send request

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Inject raw XML response into quotes div
            document.getElementById("quotes").innerHTML = xmlhttp.responseText; // Display raw XML
        }
    }
}

// Exercise 3: Parse the XML and display in a table// Tehtävä 3

function loadXMLFile() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        } else if (xmlhttp.readyState == 4) {
            console.error('Virhe: ' + xmlhttp.status);
        }
    }
} 
function loadAndParseXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Puretaan XML-datan sisältö
            const xmlDoc = xmlhttp.responseXML;
            const quotes = xmlDoc.getElementsByTagName("quote");
            const authors = xmlDoc.getElementsByTagName("author");

            // Tyhjennetään taulukon sisältö ennen uuden datan lisäämistä
            const tableBody = document.querySelector("#tabledata tbody");
            tableBody.innerHTML = "<tr><td><strong>Quote</strong></td><td><strong>Author</strong></td></tr>";

            // Lisätään jokainen lainaus ja sen kirjoittaja taulukkoon
            for (let i = 0; i < quotes.length; i++) {
                const newRow = document.createElement("tr");
                const quoteCell = document.createElement("td");
                const authorCell = document.createElement("td");

                quoteCell.textContent = quotes[i].textContent; // Lainaus
                authorCell.textContent = authors[i].textContent; // Kirjoittaja

                newRow.appendChild(quoteCell);
                newRow.appendChild(authorCell);
                tableBody.appendChild(newRow);
            }
        } else if (xmlhttp.readyState == 4) {
            console.error('Virhe: ' + xmlhttp.status);
        }
    }
}
            // 4
function loadAndParseNews(url) {
    var xmlhttp = new XMLHttpRequest();
    // Jos käytämme CORS-proxyä
    if (url.includes("iltalehti")) {
        url = "https://cors-anywhere.herokuapp.com/" + url; // Lisää CORS-proxy Iltalehti-URL:iin
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Puretaan XML-datan sisältö
            const xmlDoc = xmlhttp.responseXML;
            const items = xmlDoc.getElementsByTagName("item"); // Haetaan kaikki uutisotsikot

            // Tyhjennetään uutislista ennen uuden datan lisäämistä
            const newsList = document.getElementById("newsList");
            newsList.innerHTML = "";

            // Lisätään jokainen uutisotsikko listaan
            for (let i = 0; i < items.length; i++) {
                const newItem = document.createElement("li");
                const title = items[i].getElementsByTagName("title")[0].textContent; // Otsikko
                const link = items[i].getElementsByTagName("link")[0].textContent; // Linkki uutiseen

                // Luodaan hyperlinkki uutisotsikosta
                const linkElement = document.createElement("a");
                linkElement.href = link;
                linkElement.textContent = title;
                linkElement.target = "_blank"; // Avaa linkin uuteen välilehteen

                newItem.appendChild(linkElement);
                newsList.appendChild(newItem);
            }
        } else if (xmlhttp.readyState == 4) {
            console.error('Virhe: ' + xmlhttp.status); // Tulostetaan virhe konsoliin
        }
    }
}
