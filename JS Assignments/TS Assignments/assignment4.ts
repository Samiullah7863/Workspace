




// Create a function watcher, which accepts 1 argument named seconds. 
// when I trigger the function it would print `Start Timer` and then start the timer and after each second it would print the current time 
// and when the timer reached to its required seconds then the timer would stop and print `Your timer has been stopped.`
// For example.
// watcher(seconds); // 3 seconds
// result:
// Start Timer
// 00:01
// 00:02
// 00:03
// Your timer has been stopped.


let sec: number = 0;
let min: number = 0;
let isStart: boolean = true;

function watcher(seconds: number): void {
    if (isStart) {
      console.log("Start Timer");
    }
    isStart = false;
    sec += 1;
    if (sec >= 60) {
      sec = 0;
      min += 1;
    }
    
    if (sec < 10 && min < 10) {
        console.log("0" + min + ":0" + sec);
    } else if (min < 10) {
        console.log("0" + min + ":" + sec);
    } else if (sec < 10) {
        console.log(min + ":0" + sec)
    } else {
        console.log(min + ":" + sec);    
    }
    
    let totalTime: number = sec + min * 60;
    if (seconds == totalTime) {
      clearInterval(interval);
      console.log("Your Timer has stopped.");
    }
}

const stopSec: number = 5;
const interval = setInterval(watcher, 1000, stopSec);