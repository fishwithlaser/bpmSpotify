import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { envVars } from "./constants";

let app = express();
app.use(cookieParser());
app.use(cors());

app.get("song", () => {
  console.log("hat");
});

const portNumber = 3000;
console.log("listening on port ", portNumber);
app.listen(portNumber);
