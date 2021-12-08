const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);

let status = "The shipment is being brought to <a href='https://psf.dhl.com/?countrycode=DE&address=Herne Amalienstr. 1' class='arrowLink' target='_blank'><span class='arrow'></span>Filiale Herne Amalienstr. 1</a> for pick-up. The earliest time when it can be picked up can be found on the notification card."
console.log("status:",status, ":")

//const text = status.replace(/(<([^>]+)>)/gi, "");

const startingHtmlIndex = status.indexOf('<')
        let html = null, text = status
        if (startingHtmlIndex !== -1) {
            const endingHtmlIndex = status.lastIndexOf('>')
            html = status.substring(startingHtmlIndex, endingHtmlIndex + 1) || null
            text = status.substring(0, startingHtmlIndex)
            text += status.substring(endingHtmlIndex + 2)
        }
 console.log("text:", text, ":")
