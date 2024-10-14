// Exercise 1: Function to parse XML data embedded in HTML
function parseData() {
    // Get all quotes and authors from the embedded XML
    let quotes = document.getElementsByTagName("quotes");
    let output = '';
    
    // Loop through each quote and append to output
    for (let i = 0; i < quotes.length; i++) {
        let quoteText = quotes[i].getElementsByTagName("quote")[0].textContent; // Fetch quote text
        let authorText = quotes[i].getElementsByTagName("author")[0].textContent; // Fetch author text
        output += `<p>${quoteText} - <strong>${authorText}</strong></p>`; // Format output
    }
    
    // Inject the output into the designated div
    document.getElementById("quoteOutput").innerHTML = output; // Display parsed quotes
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

// Exercise 3: Parse the XML and display in a table
function loadAndParseXML() {
    var xmlhttp = new XMLHttpRequest(); // Create AJAX object
    xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true); // Specify the data URL
    xmlhttp.send(); // Send request

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmldoc = xmlhttp.responseXML; // Get XML document
            let quotes = xmldoc.getElementsByTagName("quotes"); // Get all quotes
            let tableBody = document.getElementById("quotesTableBody"); // Table body to inject rows

            // Clear any existing rows
            tableBody.innerHTML = '';

            // Loop through each quote to populate the table
            for (let i = 0; i < quotes.length; i++) {
                let quoteText = quotes[i].getElementsByTagName("quote")[0].textContent; // Fetch quote text
                let authorText = quotes[i].getElementsByTagName("author")[0].textContent; // Fetch author text
                
                // Create a new row and append to the table
                let newRow = `<tr>
                                <td>${quoteText}</td>
                                <td>${authorText}</td>
                              </tr>`;
                tableBody.innerHTML += newRow; // Add new row to table body
            }
        }
    }
}

// Exercise 4: Load and parse news feed
function loadAndParseNews(url) {
    var xmlhttp = new XMLHttpRequest(); // Create AJAX object
    xmlhttp.open("GET", url, true); // Specify the news feed URL
    xmlhttp.send(); // Send request

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmldoc = xmlhttp.responseXML; // Get XML document
            let items = xmldoc.getElementsByTagName("item"); // Get all news items
            let newsOutput = '<ul>'; // Prepare output

            // Loop through each news item
            for (let i = 0; i < items.length; i++) {
                let title = items[i].getElementsByTagName("title")[0].textContent; // Fetch title
                let link = items[i].getElementsByTagName("link")[0].textContent; // Fetch link

                // Create a list item with a link to the news article
                newsOutput += `<li><a href="${link}" target="_blank">${title}</a></li>`;
            }
            newsOutput += '</ul>'; // Close list
            document.getElementById("newsfeed").innerHTML = newsOutput; // Display news items
        }
    }
}
