"use strict";

// setting the server and importing the dependency of Express Api
const express = require("express"),
  bodyParser = require("body-parser"),
  app = express().use(bodyParser.json()); // creates express http server

app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

// creating the end point
app.post("/webhook", (req, res) => {
  let body = req.body;

  if (body.object === "page") {
    // Iterates over each entry
    body.entry.forEach(function (entry) {
      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
});

// Adds Support for <GET> Request
app.get("/webhook", (req, res) => {
  // verify token
  let VERIFY_TOKEN = "mojahid1997";

  // parsing the querry parameters
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    // checking if mode and token are correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});
