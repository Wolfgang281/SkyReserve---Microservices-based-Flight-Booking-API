import express from "express";
import { Logger, ServerConfig } from "./config/index.js";

import router from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(ServerConfig.PORT, (err) => {
  if (err) {
    Logger.child({ label: "ROOT" }).error("Server failed to start", {
      error: err.message,
    });
    return;
  }
  console.log("server running at port: ", ServerConfig.PORT);
  Logger.child({ label: "ROOT" }).info("Server started");
});
