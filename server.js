const express = require("express");

// express configs
const app = express();

// routes
app.use("/api", require("./routes/engine"));

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
