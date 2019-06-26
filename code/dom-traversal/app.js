// Our new js
console.log('Hi');

// it will returns h1 contents
const heading = document.querySelector('h1');
console.log(heading);

// it will returns the first p contents 

const paragraph = document.querySelector('p');
console.log(paragraph);


// returns all Paragraphs p
const allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs);


// it will returns  img with a class selector

const image = document.querySelector('.bill');
console.log(image);

const firstListItem = document.querySelector('li');
const secondtListItem = document.querySelector('li#second');

console.log(firstListItem, secondtListItem);


// returns all lists
const allListItems = document.querySelectorAll('li');
//console.log(allListItems);

for(let i = 0; i <  allListItems.length; i += 1){
    const currentListItem = allListItems[i];
    console.log(currentListItem);
}

console.log('Ending Loop...');

console.clear();

const img = document.querySelector('img'); 
const src = img.getAttribute('src')
console.log(src)

const alt = img.getAttribute('alt')
console.log(alt);

// find the 'a' tag and log out the 'href' attribute
const aTag = document.querySelector('a');
const href = aTag.getAttribute('href')
console.log(href);


// change the image src 

const img = document.querySelector('img'); 
const currentSrc = img.getAttribute('src')
img.setAttribute('src', 'http://www.placecage.com/400/400') // it will change the link to have new imge 



// .getAttribute >> to get info,    .setAttribute>> to change info

// change href to https://duckduckgo.com


const aTag = document.querySelector('a');
aTag.setAttribute('href', 'https://duckduckgo.com');

//print new href
const newHref = aTag.getAttribute('href');
console.log(newHref);

// try setting target attribute 
aTag.setAttribute('target', '_blank')

///find h1
const heading = document.querySelector('h1');


// print the current text of h1
console.log (heading.innerText);

// change the h1 text 

heading.innerText = "Changed by JS";


// append '!!!' to h1

heading.innerText += ' !!!' ;

// change the HTML of 'a' tag to be " This is a <h2>link</h2>"
aTag.innerHTML = 'This is a <h2>link</h2>';
//aTag.innerText = 'This is a <h2>link</h2>';



aTag.innerHTML += ' !!!' ;


// print ul's innertext and html
const unorderedList = document.querySelector('ul');
console.log (unorderedList.innerText)
console.log (unorderedList.innerHTML)

// 
const input = document.querySelector('input');
const currentValue = input.value;
console.log(currentValue);



// Add 'value' attribute and set  'It works!!!' to be a value
const newInput = input.getAttribute('value')

input.setAttribute('value', 'It works!!!') 
console.log(newInput);





// Getting Styles

// 1. Select the DOM Node
const heading = document.querySelector('h1');

// 2. Ask for all of the current styles
const styles = getComputedStyle(heading);

// 3. Ask for properties
console.log(styles.color);
console.log(styles.fontSize); // font-size -> fontSize
console.log(styles.textDecoration); // text-decoration -> textDecoration
console.log(styles.border);

// Find the `a` tag
const aTag = document.querySelector('a');

// Get all of the current styles for the `a` tag
const aTagStyles = getComputedStyle(aTag);

// Print out the text color,
// display, font size and the
// text decoration of the `a` tag
console.log(aTagStyles.color);
console.log(aTagStyles.display);
console.log(aTagStyles.fontSize);
console.log(aTagStyles.textDecoration);

//find image
console.log('find the image')
const image = document.querySelector('img');


// print the borders, width, height
//and border-radius 

const imageStyles = getComputedStyle(image);
console.log(imageStyles.border);
console.log(imageStyles.width);
console.log(imageStyles.height);
console.log(imageStyles.borderRadius);


console.log('........')
console.log(imageStyles.length)
///console.log(aTag.length)


// change styls for content

const heading = document.querySelector('h1');
heading.style.color = 'hotpink';
heading.style.background = 'green';
heading.style.fontSize ='100px';


// change styles for image 

const image = document.querySelector('img');
image.style.width = '300px';
image.style.height = '400px';
image.style.border = '20px solid pink';


// Creating elements
// 1. create the element and store

// 2. change it ( using .innerText, .style)

// 3. put it on the page 

const newHeading = document.createElement('h1');
newHeading.innerText = 'Create by JavaScript!';
const targetDiv = document.querySelector('div.dynamic');
targetDiv.appendChild(newHeading);





const newImg = document.createElement('img');
newImg.setAttribute('src', 'http://www.placecage.com/300/300')
newImg.style.border = '4px dashed purple';
document.body.appendChild(newImg);



const tweet = 'this is a tweet!';
const author ='ahlam42';
const content =`${tweet}, posted by ${author}`;
const newParagraph = document.createElement('p');
newParagraph.innerText= content;
newParagraph.style.color ='blue';

const newTweetsDiv = document.querySelector('.newTweets');
newTweetsDiv.appendChild(newParagraph);


