Steps:  

1. npm install  

2. From your emsdk directory, run  
    source ./emsdk_env.sh  

3. From your project directory, run:  
    emcc -o myAdder.js myAdder.c -s WASM=1 -s ASSERTIONS=1 -s EXPORTED_FUNCTIONS="['_myAdder']"  

4. npm start to start the server  

5. (tested with Chrome version 56.0.2924.87 (64-bit))  
    enable webassembly in chrome://flags  
    go to localhost:3000  
