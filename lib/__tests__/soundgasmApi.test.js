const soundgasmAPI = require('../index.js');

const TEST_URL = 'https://soundgasm.net/u/GateOfIvory/M-Sonnet-No-5';

test('sound has properties with expected values', done => {
  function callback(sound) {
    expect(sound).toMatchObject({
      title: '[M] Sonnet No. 5',
      uploader: 'GateOfIvory',
      downloadURL: 'https://soundgasm.net/sounds/b949ed00caadb8ccac989de9885e37ef681610a9.m4a'
    });
    done();
  }
  soundgasmAPI(TEST_URL, callback);
});
