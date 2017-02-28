Module = {};
fetch('myAdder.wasm')
  .then(response => response.arrayBuffer())
  .then((buffer) => {
    Module.wasmBinary = buffer;
    const script = document.createElement('script');
    script.src = 'myAdder.js';
    script.onload = function () {
      console.log('Emscripten boilerplate loaded.');
      for (let keys in Module) {
        // console.log(keys, Module[keys]);
      }
    };
    document.body.appendChild(script);

    document.getElementById('myButton').addEventListener('click', () => {
      const output = Module.ccall('myAdder', 'number', ['number', 'number'], [2, 2]);
      console.log(output);
    });
  });
