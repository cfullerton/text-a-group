var AWS = require("aws-sdk");
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.handler = function(event, context) {
    var messageText = var number = event.query.message;
    console.log(messageText);
  var sns = new AWS.SNS();
    var params = {
        Message: messageText,
        Subject: "some subject", // shows up at the beginning of every text
        TopicArn: "your-topic-arn" //fill in your topic arn
    };
};
