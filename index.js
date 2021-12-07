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

const text = status.replace(/(<([^>]+)>)/gi, "");
console.log("text:", text, ":")

const startingHtmlIndex = req.body.status.indexOf('<')
        let html = null, text = req.body.status
        if (startingHtmlIndex !== -1) {
            const endingHtmlIndex = req.body.status.lastIndexOf('>')
            html = req.body.status.substring(startingHtmlIndex, endingHtmlIndex + 1) || null
            text = req.body.status.substring(0, startingHtmlIndex)
            text += req.body.status.substring(endingHtmlIndex + 2)
        }
console.log(startingHtmlIndex,substring (status,html), ":")