// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create socket server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Create a new comment with the given text
async function createComment(text) {
  const comment = {
    text: text,
    date: new Date().toISOString()
  };

}
