# es-cfw-toolbox <small>1.0.013</small>
During the last year of developing javascript clients, a lot of tasks are needed to create a distribution of a product.
To make them reusable we combine this tasks to a toolbox, which address common needs that many web developers encounter.
Of course it is focused to support development of the ES Client Framework 2.0 :-)

## System requirements

- [node => 8.9.1 & npm => 5.6.0](https://nodejs.org/en/download/)
- [yarn => 1.3.2](https://yarnpkg.com/lang/en/docs/install/)
- [gulp-cli => 2.0.0](https://www.npmjs.com/package/gulp-cli)
- [git => 2.16.2](https://git-scm.com/)

## Installation

When you are using the ES Client Framework, there is no need for extra installation or setup.
It is already as a dev dependency in your project installed. You can skip this part and go direct to the [Tasks Overview](#tasks-overview) section

For all others use following steps:

```bash
yarn add es-cfw-toolbox --dev
```

Now you have to change your gulpfile.js to

```javascript
'use strict';
var gulp = require('gulp');

/**
 * Add the es client framework toolbox
 * 'gulp -T' shows all available gulp tasks
 */
 require('es-cfw-toolbox')(gulp);

/**
 * Place for custom gulp tasks
 */

```

After this change you are good to go!

## Tasks Overview
Type in the console
```bash
gulp -T
```

the output should look like this:
```bash
 ├── help                          Display this help text.
 ├── default                       Display this help text.
 ├── cfw:build:config              Prepare configuration from SystemJS
 ├── cfw:build:js                  Use SystemJS Builder to create static bundled file
 ├── cfw:build:components          Build systemjs components
 ├── cfw:build:html                Prepare main html file for production
 ├─┬ cfw:build:bundle              Transpile config and all js in a bundle and create theme
 │ └─┬ <series>
 │   ├── cfw:build:config
 │   ├── cfw:build:js
 │   └── cfw:build:html
 ├── cfw:build                     Main build script, prepare environment vars and system
 ├── cfw:bundle:vendors
 ├── cfw:bundle:app
 ├── cfw:bundle:components
 ├── cfw:bundle:index
 ├── cfw:bundle:config
 ├── cfw:bundle:theme
 ├── cfw:bundle:systemjs
 ├─┬ cfw:bundle
 │ └─┬ <parallel>
 │   ├── cfw:bundle:app
 │   ├── cfw:bundle:config
 │   ├── cfw:bundle:index
 │   ├── cfw:bundle:components
 │   ├── cfw:bundle:systemjs
 │   ├── cfw:bundle:theme
 │   └── cfw:bundle:vendors
 ├── cfw:clean:dist                Cleanup build destination directory
 ├── cfw:clean:temp                Cleanup temporarily files folder
 ├── cfw:clean:theme               Cleanup themes in src/theme directory
 ├── cfw:clean:debug               Cleanup console.log and debug statements in bundle build
 ├─┬ cfw:clean                     Lets clean all the things
 │ └─┬ <series>
 │   ├── cfw:clean:dist
 │   ├── cfw:clean:theme
 │   └── cfw:clean:temp
 ├── cfw:config:index
 ├── cfw:config:index:dist
 ├── cfw:config:client
 ├── cfw:config:env
 ├── cfw:config
 ├── cfw:connect                   Run local livereload Server, target development directory (src)
 ├── cfw:copy:config               Copy client configuration files for distribution
 ├── cfw:copy:theme                Copy themes of the client
 ├── cfw:copy:systemjs             Copy themes of the client
 ├── cfw:copy:pdfjs                Copy pdfjs library
 ├─┬ cfw:copy                      One copy task to rule them all
 │ └─┬ <series>
 │   ├── cfw:copy:config
 │   ├── cfw:copy:theme
 │   └── cfw:copy:pdfjs
 ├── cfw:docker:build              Build docker image
 ├── cfw:docker:run                Run docker container, local docker required!
 ├── cfw:docker:create:file        Create a dockerfile for the project
 ├── cfw:docker:create:ignorefile  Create .dockerignore file in project root
 ├─┬ cfw:docker:init               Initialize project for docker
 │ └─┬ <series>
 │   ├── cfw:docker:create:file
 │   └── cfw:docker:create:ignorefile
 ├─┬ cfw:docker                    Build client framework bundle, initialize project for docker, build and start container
 │ └─┬ <series>
 │   ├─┬ cfw:docker:init
 │   │ └─┬ <series>
 │   │   ├── cfw:docker:create:file
 │   │   └── cfw:docker:create:ignorefile
 │   ├── cfw:docker:build
 │   └── cfw:docker:run
 ├── cfw:git:short                 Access git revision state short
 ├── cfw:git:long                  Access git revision state long
 ├── cfw:git:branch                Access git branch state
 ├── cfw:git:tag                   Access git revision tag
 ├── cfw:git:log                   Access git revision log
 ├── cfw:html                      Livereload for the main html file
 ├── cfw:js                        Livereload for javascript files
 ├── cfw:lint:js                   Linting of javascript files
 ├── cfw:lint:sass                 Linting of SASS files
 ├─┬ cfw:lint                      Lint all the things!
 │ └─┬ <parallel>
 │   ├── cfw:lint:js
 │   └── cfw:lint:sass
 ├── cfw:metric                    Create Code Metric Analysis Report with Plato
 ├── cfw:prepare:changelog         Generate changelog
 ├── cfw:prepare:bump:version      Increment version number
 ├── cfw:prepare:release           Prepare project for release
 ├── cfw:prepare:clientconf        Prepare client configuration file for release
 ├── cfw:sdk:get                   Get Backbone SDK from Platform
 ├── cfw:sdk:unzip                 Unzip Bacbone SDK
 ├── cfw:sdk:copy                  Copy Backbone SDK to source directory
 ├─┬ cfw:sdk                       Bundle of Tasks for Platform SDK
 │ └─┬ <series>
 │   ├── cfw:sdk:get
 │   ├── cfw:sdk:unzip
 │   └── cfw:sdk:copy
 ├── cfw:serve                     Start Browsersync Server on project root directory
 ├── build                         Start Browsersync Server on sample directory (sample)
 ├── cfw:serve:source              Start Browsersync Server on source directory (src)
 ├── cfw:serve:dist                Start Browsersync Server on output build directory (dist)
 ├── cfw:serve:sample              Start Browsersync Server on sample directory (sample)
 ├── cfw:slack                     Sends a message to slack channel
 ├── cfw:theme:sass                Create single css file from sass source directory
 ├── cfw:theme:fonts               Copy fonts from sass source directory
 ├── cfw:theme:images              Copy images from sass source directory
 ├── cfw:theme:settings            Copy theme settings configuration file
 ├─┬ cfw:theme                     Run all needed subtasks for the theme in order
 │ └─┬ <series>
 │   ├── cfw:theme:sass
 │   ├── cfw:theme:fonts
 │   ├── cfw:theme:images
 │   └── cfw:theme:settings
 ├── cfw:watch                     One task to start all available watchers on source files
 └─┬ cfw:watchers
   └─┬ <parallel>
     ├── cfw:lint:js
     ├── cfw:js
     ├── cfw:lint:sass
     └── cfw:html
```

## CLI parameters / arguments
Following arguments can be passed to the tasks to support the client framework:

### system
available args: TEST, STAGING, LIVE
```
gulp cfw:config --system <arg>
```
sets the system in the main client files (env.config.js, client.json, index.html)

### theme
default args: default, easy
```
gulp cfw:theme --theme <arg>
```
build theme from sass source files and write it to src/theme

### server
default args: NONE
```
gulp cfw:sdk --server <arg>
```
download sdk from existing server configuration (cfw.json). Further information about [cfw.json](configuration.md#cfw-file)

all the arguments are chainable, sdk download example:
```
gulp cfw:sdk --server dev --system live
```





