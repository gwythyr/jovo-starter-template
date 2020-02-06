'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('MainIntent');
    },

    MainIntent() {
        this.ask(`Hello World! What's your name?`, `Please tell me your name.`);
    },

    NavigateHomeIntent() {
        this.ask(`Let's start from the begging, say you command`, `Try to say something`);
    },

    HelpIntent() {
        this.tell(`This is skill`);
    },

    FallbackIntent() {
        this.ask(`I didn't get you, try to repeat your command`, `Repeat your command`);
    },

    END() {
        this.tell(`Buy, see you next time`);
    },

    Unhandled() {
        this.tell(`Something went wrong, try to run this skill again`);
    }
});

module.exports.app = app;
