# Node API Server for Brainbox Tutors

## Getting Started

This is an Express app using Typescript and Webpack.

Pre-requisites:

- Node

To build the project, run:

```zsh
npm run build
```

To run the server, run:

```zsh
npm start
```

## Hot-Loading for Development

If you want files to be generated as they're saved, and the server to restart when generated, you will need to open two terminals in this folder and run the following commands.

Terminal 1:

```zsh
npx webpack --watch
```

Terminal 2:

```zsh
cd ./build
npx nodemon server.js
```
