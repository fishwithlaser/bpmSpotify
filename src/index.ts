import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import querystring from "querystring";

import { envVars, spotifyScope } from "./constants";
import { randomStr } from "./authFunctions/randomStr";

let app = express();
app.use(cookieParser());
app.use(cors());

const stateKey = "spotify_bpm_state";

app.get("/song", (req, res) => {
  const stateStr = randomStr(16);
  res.cookie(stateKey, stateStr);
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: envVars.clientId,
        scope: spotifyScope,
        redirect_uri: envVars.redirectUri,
        state: stateStr,
      })
  );
});

const portNumber = 3000;
console.log("listening on port ", portNumber);
app.listen(portNumber);
