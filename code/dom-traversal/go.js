
// asuman work 

//Find the Google logo and store it in a variable.
const img = document.querySelector('#hplogo');


//Save the current src attribute into a variable
const oldSrc = img.getAttribute('src');


// Modify the source of the logo IMG so that it's a Yahoo logo instead.
//You can use this url for the Yahoo Logo: https://amp.businessinsider.com/images/4fd8dcb7eab8eab648000004-750-143.jpg
img.setAttribute('src', 'https://amp.businessinsider.com/images/4fd8dcb7eab8eab648000004-750-143.jpg');

//Hint: You will need to figure out how to remove the srcset attribute for this!
img.setAttribute('srcset', '');

// Find the Google search button and store it in a variable.
//Modify the text of the button so that it says "Yahooo!" instead.
document.querySelectorAll('[name="btnK"]')[1].value = 'Yahooo!';
