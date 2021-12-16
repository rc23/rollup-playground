import server from "../src/server/index.js";

const host = "0.0.0.0";
const port = 3000;

server().listen(port, host, (err) => {
  if (err) {
    console.log(
      "%c Unable to start the server :",
      "color: lightCoral; font-weight: bold",
      err
    );
    throw err;
  }
  console.log(
    "%c Listening on http://%s:%s",
    "color: lightGreen; font-weight: bold",
    host,
    port
  );
});
