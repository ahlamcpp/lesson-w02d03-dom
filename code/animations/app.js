//My animation JS file 
// Let's define inimation 
// 1. Starting point
// 2. Step
// 3. Time between steps
// 4. Total time
// 5. Ending Point



// You use ' aetTimeout' as delay
// You use ' setInterval' as interval

// const timeoutCallback = function(){
//     console.log('I timed Out!');
// }
// setTimeout (timeoutCallback, 2000); // 2 seconds

// const clockTick = function(){
//     console.log('Tick, Tock!');
// }
// const timer= setInterval(clockTick, 1000);
// clearInterval(timer);



const fadeNickAway = function() {
    const nick = document.querySelector('.nick');
    const currentOpacityAsString = getComputedStyle(nick).opacity;
    const currentOpacity = parseFloat(currentOpacityAsString);

    const newOpacity = currentOpacity - 0.01;
    nick.style.opacity = newOpacity;
    if (currentOpacity >= 0){
        setTimeout(fadeNickAway, 10);
    }

    //console.log(getComputedStyle(nick).opacity);
}

setTimeout (fadeNickAway, 1000);