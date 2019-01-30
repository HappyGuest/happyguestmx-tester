'use strict';

const fs = require('fs'),
    path = require('path'),
    env = process.env;

const relativePath = env.npm_package_name;
const pathFile = `${env.INIT_CWD}/package.json`;

const content = require(pathFile);
content.scripts.test = `sh node_modules/${relativePath}/localtest.sh $env`;
fs.writeFileSync(pathFile, JSON.stringify(content));