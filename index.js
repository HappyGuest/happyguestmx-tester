'use strict';

const lambdaLocal = require('lambda-local'),
    path = require('path');

//setting empty string when env is dev(bc apex requires)
let env = process.argv[2] || 'dev';
env = env === 'dev' ? '' : `.${env}`;
const environment = require(`../../../function${env}.json`).environment,
    event = require(`../../../events/event${env}`);
    
const params = {
    event,
    environment,
    lambdaPath: path.join(__dirname, '/../../../index.js'),
    profilePath: '~/.aws/credentials',
    profileName: 'default',
    timeoutMs: 10000
};

lambdaLocal.execute(params).then((done) => {
    console.log(done);
}).catch((err) => {
    console.log(err);
});
