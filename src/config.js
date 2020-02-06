// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    logging: false,
 
    intentMap: {
        'AMAZON.StopIntent': 'END',
        'AMAZON.FallbackIntent': 'FallbackIntent',
        'AMAZON.CancelIntent': 'END',
        'AMAZON.HelpIntent': 'HelpIntent',
        'AMAZON.NavigateHomeIntent': 'NavigateHomeIntent'
    },
 
    db: { },
 };
