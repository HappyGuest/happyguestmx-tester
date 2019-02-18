'use strict';

const fs = require('fs'),
    path = require('path'),
    env = process.env;

const relativePath = env.npm_package_name;
const pathFile = `${env.INIT_CWD}/package2.json`;
let packageFile;

function appendScript() {
    try {
        packageFile = require(pathFile);
        packageFile.scripts.test = `sh node_modules/${relativePath}/localtest.sh $env`;
        fs.writeFileSync(pathFile, JSON.stringify(packageFile));
    }
    catch(err){
        if (err.code === 'MODULE_NOT_FOUND') {
            packageFile = require('./src/package.json');
            packageFile.scripts.test = `sh node_modules/${relativePath}/localtest.sh $env`;
            fs.writeFileSync(pathFile, JSON.stringify(packageFile));
        }
        else console.log(err);
    }
}

appendScript();