"use strict";
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  console.log(input);
}

function init() {
  const input = [];
  rl.on("line", function (line) {
    input.push(line);
  }).on("close", function () {
    solution(input);
    process.exit();
  });
}

init();
