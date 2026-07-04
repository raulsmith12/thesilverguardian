const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "the-silver-guardian-api",
    timestamp: new Date().toISOString(),
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`The Silver Guardian backend is running on port ${port}`);
  });
}

module.exports = app;

require("./server/index.js");
