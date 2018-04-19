# Weather Control

## Instructions

* Git clone the project.
* Run "yarn" in the terminal to install node_modules.
* Create a file named "config.js" inside the server folder.
* Add the following code inside config.js but with your own API key.

```
const apiKey = "NotARealKey!";

module.exports = {
  apiKey
};
```

## Useful Scripts

* To start the server, run "nodemon server" in the terminal, while in the projects root.
* To start the App, run "yarn start", keep in mind that the server needs to be running
  for the App to work.
* To start testing, run "yarn test".
* To build, run "yarn build".
