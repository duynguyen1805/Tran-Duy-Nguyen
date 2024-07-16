import app from "./src/app";
import * as http from "http";

// Port
const port: number = Number(process.env.PORT) || 4000;

// start server
const server: http.Server = app.listen(port, () => {
  console.log(`Server NodeJS is running on port ${port}`);
});

// process.on("SIGINT", () => {
//   server.close(() => console.log("Exit server eCommerce"));
// });
