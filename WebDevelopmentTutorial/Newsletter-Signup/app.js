//jshint esversion: 6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")

});

app.post("/", function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [{
                email_address: email,
                status: "subscribed",
                merge_fiedls: {
                    FNAME: firstName,
                    LNAME: lastName
                }

            }

        ]

    };

    const jsonData = JSON.stringify(data);

    url = "https://us6.api.mailchimp.com/3.0/lists/2734696553";
    const options = {
        method: "POST",
        auth: "aravindv:8b4b2e3deb13e928b8b6f1e76fa669c1-us6"
    }

    const request = https.request(url, options, function(response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html")
        } else
            res.sendFile(__dirname, +"/failure.html")


        response.on("data", function(data) {
            console.log(JSON.parse(data));

        })

    });
    request.write(jsonData);
    request.end();
});

-
//{"name":"","contact":{"company":"","address1":"","address2":"","city":"","state":"","zip":"","country":"","phone":""},"permission_reminder":"","use_archive_bar":false,"campaign_defaults":{"from_name":"","from_email":"","subject":"","language":""},"notify_on_subscribe":"","notify_on_unsubscribe":"","email_type_option":false,"double_optin":false,"marketing_permissions":false}'



app.post("/failure", function(req, res) {
    res.redirect("/")
});

app.listen(3000, function() {
    console.log("Server started in port 3000");
});

//api-Key: 8b4b2e3deb13e928b8b6f1e76fa669c1-us6

//Audience ID : 2734696553