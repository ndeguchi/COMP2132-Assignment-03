
/* Natsu Deguchi */


const p01 = document.getElementById('p01');
const p02 = document.getElementById('p02');
const p03 = document.getElementById('p03');


/* part 1 */

//invalid testing
p01.innerHTML += '<h4>Invoking with a string, not an array...</h4>';
p01.innerHTML += displayListingImage(notAnArrayOfImages);
p01.innerHTML += '<h4>Invoking with an array of numbers, not string image names...</h4>';
p01.innerHTML += displayListingImage(alsoNotAnArrayOfImages);

//valid testing
p01.innerHTML += '<h4>Invoking with a valid array of image names...</h4>';
p01.innerHTML += displayListingImage(arrayOfImages);



/* part 2 */

//invalid testing
p02.innerHTML += '<h4>Trying with an array that contains booleans, and not string URLs:</h4>';
p02.innerHTML += displayListingLinks(notAnArrayOfLinks);
p02.innerHTML += '<h4>Trying with a number, not an array: </h4>';
p02.innerHTML += displayListingLinks(alsoNotAnArrayOfLinks);

//valid testing
p02.innerHTML += '<h4>Tyring with a valid array of link URLs:</h4>';
p02.innerHTML += displayListingLinks(arrayOfLinks);



/* part 3 */

//invalid testing
p03.innerHTML += '<h4>Providing invalid parameter (not an array):</h4>';
p03.innerHTML += displayListingNames(notAnArrayOfNames);
p03.innerHTML += '<h4>Providing invalid parameter (array is too small):</h4>';
p03.innerHTML += displayListingNames(arrayOfNamesTooSmall);
p03.innerHTML += '<h4>Providing invalid second parameter (can only have "ul" or "ol" lists):</h4>';
p03.innerHTML += displayListingNames(arrayOfNames,"Cheeseburger");

//valid testing
p03.innerHTML += '<h4>Providing valid parameter array, using defult second parameter for list type "ul":</h4>';
p03.innerHTML += displayListingNames(arrayOfNames);
p03.innerHTML += '<h4>Providing valid parameter array with second parameter of "ol" instead of "ul":</h4>';
p03.innerHTML += displayListingNames(arrayOfNames,"ol");