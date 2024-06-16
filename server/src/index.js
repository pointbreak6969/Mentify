import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/db.js";
import { createServer } from "node:http";
const PORT = process.env.PORT || 5000;
const server = createServer(app);
connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("MongoDb connection error", e);
  });

export {server};
