const express = require('express');

// Tells node that we are creating an "express" server
const app = express();

// Sets an inital port
const PORT = process.env.PORT || 3030;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Router - below points our server a series of route files

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// code starts server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
