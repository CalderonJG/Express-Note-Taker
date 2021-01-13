
const path = require("path");

module.exports = function(app) {

// HTML GET requests
    app.get("/*", function(req, res) {
        res.sendFile(path.join(_dirname, "../assets/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(_dirname, "../assets/notes.html"));
    });

};
