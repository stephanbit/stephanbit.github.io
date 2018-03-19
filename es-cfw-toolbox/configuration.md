# Configuration
All configuration of the project are in the file cfw.json managed.
The default file looks like this:

```json
{
  "app": "ES Client Framework 2.0 Starter Kit",
  "description": "",
  "lang": "de",
  "components": [],
  "servers": []
  "systems": [
    "TEST",
    "STAGING",
    "LIVE"
  ],
  "platforms": [
    "browser",
    "desktop",
    "tablet",
    "mobile"
  ],
  "platform": "browser",
  "themes": [
    "default",
    "easy"
  ],
  "theme": "easy",
  "paths": {
    "html": "./src/*.html",
    "js": "./src/**/*.js",
    "sass": "./sass",
    "img": "./resources/*",
    "src": "./src",
    "css": "./src/theme/easy/browser/css",
    "dist": "./dist",
    "build": "build",
    "root": "./",
    "temp": "tmp",
    "theme": "./src/theme/",
    "generator": "generator"
  },
  "sass": {
    "errLogToConsole": true,
    "outputStyle": "compressed"
  },
  "test": {
    "config": "karma.config.js"
  },
  "slack": {
    "token": "",
    "channel": ""
  }
}
```