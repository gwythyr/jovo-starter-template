'use strict';

const { ExpressJS, Lambda } = require('jovo-framework');
const { app } = require ('./app.js');
const express = require('express');
const helmet = require('helmet');
const verifier = require('alexa-verifier-middleware');
const bodyParser = require('body-parser');

const Webhook = express();
Webhook.use(helmet());

// ------------------------------------------------------------------
// HOST CONFIGURATION
// ------------------------------------------------------------------

// ExpressJS (Jovo Webhook)
if (process.argv.indexOf('--webhook') > -1) {
    const port = process.env.JOVO_PORT || 3000;
    Webhook.jovoApp = app;

    Webhook.listen(port, () => {
        console.info(`Local server listening on port ${port}.`);
    });

    Webhook.post('/skill/', verifier, bodyParser.json(), async (req, res) => {
        await app.handle(new ExpressJS(req, res));
    });

    Webhook.post('/action/', bodyParser.json(), async (req, res) => {
        await app.handle(new ExpressJS(req, res));
    });
}

// AWS Lambda
exports.handler = async (event, context, callback) => {
    await app.handle(new Lambda(event, context, callback));
};
