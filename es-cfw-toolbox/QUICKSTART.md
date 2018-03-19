# QUICKSTART Client framework 2.0

## System requirements
Following tools must be installed globally on your system before using the project

- [node => 8.9.1 & npm => 5.6.0](https://nodejs.org/en/download/)
- [yarn => 1.3.2](https://yarnpkg.com/lang/en/docs/install/)
- [gulp-cli => 2.0.0](https://www.npmjs.com/package/gulp-cli)
- [git => 2.16.2](https://git-scm.com/)

Also you need to configure/create your .npmrc file in your users home folder.
More information about the usage you can found at [EASY SOFTWARE AG Intranet](https://intranet.easy.de/display/ES/Development+Workflow)

## Installation (after checkout)
```bash
yarn install
```
It will install all npm modules and jspm packages

### To check your installation was successful, you can type in following command in terminal/consol
```bash
gulp -v
```
this command show´s you the global installed gulp-cli and the local installed gulp version.
```
[07:11:51] CLI version 2.0.1
[07:11:51] Local version 4.0.0-alpha.2
```

After installation you have to initialize your project with a server configuration (use default as id)
```bash
npm run init
```

Following tasks will be started automatically to prepare the project

```bash
gulp cfw:config --set server (create server configuration in cfw.json)
gulp cfw:theme --theme default (build theme from sass folder to src folder)
gulp cfw:sdk --system test (download sdk for defined backend system test)
gulp cfw:config (create index.html, env.config.js and client.json files in src folder)
```

After initialization tasks you are ready to go, just start the index.html from src folder with following command

```bash
gulp cfw:serve:source (will start browsersync local webserver on localhost:3000)
```

You should see the message 'Client Framework 2.0 started!' in your browser. Now you have a full working skeleton of the client framework

## Congrats:-)


# Create your first app
This example show´s you how fast you can create a full functional browser client without coding one line!

## EZE-CLI
First you need to install the eze cli globally. More information about this tool you can find [here](https://www.npmjs.com/package/eze-cli)
```bash
yarn global add eze-cli
```
after installation, you can check if the cli is available with
```bash
eze
```
output:
```bash
[eze] 1.0.0 Installed generators
[eze] └── cli (1.0.0)
```
For our example we install three generators globally:
```bash
yarn global add eze-cfw-component-dashboard
yarn global add eze-cfw-component-login
yarn global add eze-cfw-component-topnavigation
```
type again
```bash
eze
```
output should be:
```bash
[eze] 1.0.0 Installed generators
[eze] ├── cfw-component-dashboard (1.0.1)
[eze] ├── cfw-component-login (1.0.2)
[eze] ├── cfw-component-topnavigation (1.0.1)
[eze] └── cli (1.0.0)
```
Now we can use the generators with
```bash
eze cfw-component-dashboard
eze cfw-component-login
eze cfw-component-topnavigation
```
Each component will ask some questions for the configuration, for now use always the default values.
After successful creation of the components, we have to tell the framework the changes with:
```bash
gulp cfw:config
```
To use login authentication we have only change one value in src/main.js (false -> true)
```bash
ROW[15] app.authenticated = true;
```
Now we are ready to start the client again
```bash
gulp cfw:serve:source
```

