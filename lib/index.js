'use strict';

const https = require('https');

function getSound(url, callback) {
  getWebpage(url, webpage => {
    let title = webpage.match(/aria-label="title">(.*)</)[1];
    let uploader = url.match(/\/u\/(.*)\//)[1];
    let downloadURL = webpage.match(/(https:\/\/soundgasm.net\/sound.*)"/)[1];
    let sound = {
      title: title,
      uploader: uploader,
      downloadURL: downloadURL
    };
    callback(sound);
  });
}

function getWebpage(url, callback) {
  https.get(url, res => {
    let webpage = '';
    res.on('data', chunk => {
      webpage += chunk;
    });
    res.on('end', () => callback(webpage));
  });
}

function soundgasmAPI(url, callback) {
  getSound(url, callback);
}

module.exports = soundgasmAPI;
