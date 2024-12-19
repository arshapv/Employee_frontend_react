how to deploy file using node.js backend
----------------------------------------
1.create index.js file in server folder
2.update scripts in package.json file as "start":"node index.js"
3.create .gitignore file and add 'node_modules' folder in it
4.define json-server to run json file in index.js

index.js
--------
1. import json server as' const jsonServer=require('json-server')'
2. create server for our application using create ()