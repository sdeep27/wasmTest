Steps:

1. From your emsdk directory, run
    source ./emsdk_env.sh

2. From your project directory, run:
    emcc -o myAdder.js myAdder.c -s WASM=1 -s ASSERTIONS=1 -s EXPORTED_FUNCTIONS="['_myAdder']"

3. npm start to start the server

4. (tested with Chrome version 56.0.2924.87 (64-bit))
    enable webassembly in chrome://flags
    go to localhost:3000
    