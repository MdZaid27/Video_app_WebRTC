require("dotenv").config();

const { ExpressPeerServer } = require("peer");
const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("PeerJS Server Running....");
});

const PORT = 9000;

app.use(cors());
app.use(express.static("public"));

const peerServer = ExpressPeerServer(server, {
  debug: true,
  allow_discovery: true,
});

app.use("/myapp", peerServer);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`PeerJs running on port ${PORT}`);
});
