### Setup and installation
Make sure you are at the root directory of the project, and run `npm install` to \
get started.

### Running
To run the server, run `npm start`. It runs it in `localhost:5000`. 

### Testing
To test the server, run `npm test`.

## Frontend Client
`client/` directory contains the entire code for the frontend, which is with React. \
The only files you need to worry about here are `App.js`, `App.test.js`, `App.css`, \
`FunnyRankings.js` and `package.json`. \There is a simple test right now in `App.test.js` that you can use to make sure you are running \
tests correctly with your first run. 

I suggest you follow all the steps below first to make sure everything is working.

### Setup and Installation
Make sure you are in `client/` directory and run `npm install`. \
Feel free to add any other packages, just don't forget to add them to \
`package.json` so I can run the project as well. Just running \
`npm install <package> --save` will insert it into `package.json`.

### Running
To run the webapp, run `npm start`. It runs it in `localhost:3000`. It is already set up to proxy \
requests to the backend at `localhost:5000`. If you want it to actually pull from the backend \
for a test run, also have the backend running or else it will fail to fetch. I suggest having two \
terminal windows open, one running the backend and the other running the frontend, so you can \
see both processes running and can debug either of them at the same time.

### Testing
To test, run `npm test`.
