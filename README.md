# 1. Running Native C/C++ code in Node + Express Server

I created this simple API to allow code written in C/C++ to run in Node.js. This type of API will come in handy when importing AI & Data Science projects into web applications.
We use TypeScript primarily to write code for web apps, TypeScript code is then convereted into JavaScript for cross-browser compatibility.

# 2. Installation of app

Make sure you have the latest long-term support version of Node (v 18.+) & a supported version of Python. (Python >= v3.12 requires node-gyp >= v10)

Install the gcc/g++ compiler for Node.js, node-gyp globally

`npm install -g node-gyp`

If you are using Windows, make sure you execute these commands before installing node-gyp globally:

`npm install --global --production windows-build-tools`

`choco install python visualstudio2022-workload-vctools -y`

`node-gyp configure --msvs_version=2015`

Compile C/C++ code by executing `npm run build`, this instruction replaces `node-gyp configure` && `node-gyp build`

To delete past builds, execute `node-gyp clean`
To clear the build, re-configure, and re-build run `node-gyp clear`

# 3. Running Server In Docker

--More updates to follow--

Build Image: `docker build -t native-server:dev . --no-cache`

Run Container: `docker run -p 7000:7000 native-server:dev`

# 4. Resources

Link: https://www.youtube.com/watch?v=bogYQr096h4