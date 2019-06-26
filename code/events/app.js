console.log ('Hi from JS!')


// Events Need:
// 1. An event type:    ("CLICK")
// 2. An event target    ("BUTTON")
// 3. A callback function   


// when all these are combined, 
// they become an event listener 


//Type of event
const eventType = 'click';


// Target of event
const myButton = document.querySelector('button');

// Callback = what do you want to do
// do as a response
const myCallback = function(event) {
    console.log ('The button was clicked', event);
}

// Create an event listener , call the function
myButton.addEventListener(eventType, myCallback);

const darkButton = document.querySelector('#dark');

// Type, Target, Callback
const changeToDarkTheme = function (){
    console.log('Dark Theme');
    document.body.style.background = 'black';
    document.body.style.color = 'white';
}
 darkButton.addEventListener('click', changeToDarkTheme);


 const lightButton = document.querySelector('#light')
 const changeToLightTheme = function(){
     console.log('Light Theme');
     document.body.style.background = 'white';
     document.body.style.color = 'black';
 }

 lightButton.addEventListener('click', changeToLightTheme);


// Tweet Button

const postTweetButton = document.querySelector('.post');
const creatTweet = function(){
   //get whatever is typed in the input
   // and save it in a varibale called
   //content.
   const input = document.querySelector('input')
   const content =input.value;

   // take the content and put it in the pargraph and show it on the screen
   // creat a pargraph and put the content in it
   const newParagraph = document.createElement('p');
   newParagraph.innerText= content;

// take the pargraph and put it at the end of the div.newTweets
const newTweetsDiv = document.querySelector('.newTweets');
newTweetsDiv.appendChild(newParagraph);
}
postTweetButton.addEventListener('click', creatTweet);


const colorInput = document.querySelector('input.color');

const onColorChange = function(){
document.body.style.background = colorInput.value;
}

colorInput.addEventListener('change', onColorChange);


const clickCounterButton  = document.querySelector ('button.click');
let clickCount = 0;
const onClick = function(){
clickCount += 1;
const targetDiv = document.querySelector('.clickCount');
targetDiv.innerText = clickCount;
}
clickCounterButton.addEventListener ('click', onClick);

/// image 

const billImage = document.querySelector('.bill');
const nickImage = document.querySelector('.nick')
const doubleImageSize = function () {
    this.style.width = '600px'; // best way to use 'this' for many objects
}

billImage.addEventListener('click', doubleImageSize);
nickImage.addEventListener('click', doubleImageSize);