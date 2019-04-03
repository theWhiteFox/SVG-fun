import http from 'http';
import WebSocket from 'ws';
import express from 'express';
import ShareDB from 'sharedb';
import JSONStream from '@teamwork/websocket-json-stream';
import { sampleStudioData } from 'vizhub-core';

const app = express();

app.get('/api/studio/data/:id', (req, res) => {
  console.log(req.params.id);
  res.send(sampleStudioData);
});

const share = new ShareDB({
  disableDocAction: true,
  disableSpaceDelimitedActions: true
});

const connection = share.connect();

const server = http.createServer(app);

new WebSocket.Server({ server }).on('connection', ws => {
  console.log('connection');
  share.listen(new JSONStream(ws));
});

server.listen(4000);
