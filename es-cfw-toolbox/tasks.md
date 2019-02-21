# build

- cfw : build
use following tasks in serial : 
    - cfw : clean
    - cfw : sdk
    - cfw : build : bundle
    - cfw : theme
    - cfw : copy
    - cfw : clean : temp
    - cfw : prepare : clientconf
- cfw : build : config
- cfw : build : js
- cfw : build : components
- cfw : build : html
- cfw : build : bundle

# bundle
Main task to bundle the app
- cfw : bundle : app
- cfw : bundle : config
- cfw : bundle : index
- cfw : bundle : components
- cfw : bundle : systemjs
- cfw : bundle : theme
- cfw : bundle : vendors

# clean
- cfw : clean
- cfw : clean : dist
- cfw : clean : temp
- cfw : clean : theme
- cfw : clean : debug

# config

- cfw : config : index
- cfw : config : index : dist
- cfw : config : client
- cfw : config : env
- cfw : config
    - without params
    - env --create
    - env --set
    - env --remove


# connect
- cfw : connect

# copy
- cfw : copy
- cfw : copy : config
- cfw : copy : theme
- cfw : copy : systemjs
- cfw : copy : pdfjs


# docker
- cfw : docker
- cfw : docker : build
- cfw : docker : run
- cfw : docker : create : file
- cfw : docker : create : ignorefile
- cfw : docker : init

# documentation
- cfw : docs
    - parallel :  cfw : docs : js, cfw : docs : styles, cfw : docs : pages
- cfw : docs : pages
- cfw : docs : styles
- cfw : docs : js


# git
- cfw : git : short
- cfw : git : long
- cfw : git : branch
- cfw : git : tag
- cfw : git : log

# init
- cfw : init : pages

# linting
- cfw : lint
    - parallel :  cfw : lint : js, cfw : lint : sass
- cfw : lint : js
- cfw : lint : sass

# metric
Create Code Metric Analysis Report with Plato
- cfw : metric

# prepare

# sdk
- cfw : sdk
    - series :  cfw : sdk : get, cfw : sdk : unzip, cfw : sdk : copy
- cfw : sdk : copy
- cfw : sdk : get
- cfw : sdk : unzip


# serve
- cfw : serve
- cfw : serve : source
- cfw : serve : dist
- cfw : serve : sample
- cfw : serve : docs

# test
- cfw : test
- cfw : test : ci
- cfw : test : e2e
- cfw : test : integration
- cfw : test : unit
- cfw : test : watch

# theme
- cfw : theme
    - series :  cfw : theme : sass, cfw : theme : fonts, cfw : theme : images, cfw : theme : settings
- cfw : theme : font
- cfw : theme : images
- cfw : theme : sass
- cfw : theme : settings

# watchers
- cfw : watch
- cfw : watchers
    - parallel :  cfw : lint : js, cfw : js, cfw : lint : sass, cfw : html
