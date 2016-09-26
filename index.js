//index.js
var robot = require('robotjs');
var fs = require('fs');
var screenshot = require('desktop-screenshot');
var Jpeg = require('Jpeg');
robot.setMouseDelay(2);

var minHeight = 115;
var maxHeight = 705;
var minWidth = 0;
var maxWidth = 1270;

var height = maxHeight - minHeight;
var width = maxWidth - minWidth;

robot.moveMouse(1275,10);
robot.mouseClick();

robot.moveMouse(maxWidth,minHeight);
//minWidth, minHeight, height, width
var img = robot.screen.capture(0,0,500,500);
console.log(img);

var jpeg = Jpeg(img.image, img.width, img.height);
jpeg.encode(function (image, error) {
        console.log(image);
    });


screenshot("screenshot.png", function(error, complete) {
    if(error)
        console.log("Screenshot failed", error);
    else
        console.log("Screenshot succeeded");
});
