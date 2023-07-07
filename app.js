const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

const dateTime = new Date();
const result = addDays(
  new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
  100
);
app.get("/", (request, response) => {
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
