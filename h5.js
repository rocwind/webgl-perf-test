// output logs
var board = document.querySelector('.board');
var oriLog = console.log;
var logs = [];
console.log = function(text) {
    oriLog(text);
    logs.push(text);
    if (logs.length > 5) {
        logs.shift();
    }

    board.innerHTML = logs.join('<br>');
}

var canvas = document.querySelector('canvas');
PerfTest.start({
    canvas: canvas,
});
