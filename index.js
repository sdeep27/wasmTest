const Module = {};
fetch('adder.wasm')
  .then(response => response.arrayBuffer())
  .then((buffer) => {
    Module.wasmBinary = buffer;
    const script = document.createElement('script');
    script.src = 'adder.js';
    script.onload = function () {
      console.log('Emscripten boilerplate loaded.');
    };
    document.body.appendChild(script);

    document.getElementById('myButton').addEventListener('click', () => {
      const output = Module.ccall('adder', 'number', ['number', 'number'], [2, 2]);
      console.log(output);
    });
  });
const xhr = new XMLHttpRequest();
xhr.open('GET', './adder.wasm');
