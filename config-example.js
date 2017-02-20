var slackbot = require('./lib/bot');

var config = {
    bot_name: "WebexBot",//Provide the name to post under.  Default is WebexBo
    token: 'xoxp-24058771809-24057187122-143896304578-88da39bdc138385910a4c25aca01713a',
    webex_urls: {
      "launch": "https://ibm2.webex.com/meet/cbtheis",//REPLACE THESE W/ YOUR COMPANY URLs
      "join": "https://ibm2.webex.com/join/cbtheis",
      "DEFAULT": "https://ibm2.webex.com/"
    },
    pattern: /^\:webex\s+(personal\s+(\w+))\s*$/, //Default is: /webex personal username
    verbose: true,
    emoji: ":webex:"//NOTE: you'll need to add this emoji

};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
