const fs = require("fs");
const path = require("path");

let notes = [];

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        notes = fs.readFileSync(path.resolve("..db/db.json"), "utf8");
        notes = JSON.parse(notes);
        return res.json(getNotes);

    });

    app.post("/api/notes", function(req, res) {
        notes = fs.readFileSync(path.resolve("..db/db.json"), "utf8");
        notes = JSON.parse(notes);
        return res.json(getNotes);
    });

    app.delete("/api/notes/:id", function(req, res) {
        notes = fs.readFileSync(path.resolve("..db/db.json"), "utf8");
        notes = JSON.parse(notes);
        fs.writeFile(path.resolve("..db/db.json"), notes, function(err) {
            if(err) throw err;
        });

        res.json(JSON.parse(notes));

    });

};
