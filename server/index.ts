import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "the-silver-guardian-api",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`The Silver Guardian backend is running on port ${port}`);
});
