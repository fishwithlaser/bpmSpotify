/** params:
 *  clientId and secret come from https://developer.spotify.com/dashboard/ to get them, register an app!
 *  url is a redirect required for o-auth
 */

export const envVars = {
  clientId: process.env.client_id,
  clientSecret: process.env.clien_secret,
  redirectUri: process.env.redirectUri,
};

export const spotifyScope =
  "user-read-playback-state user-read-currently-playing";
