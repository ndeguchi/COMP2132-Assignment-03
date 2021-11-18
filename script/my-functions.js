
/* Natsu Deguchi */

/* part 01 */

function displayListingImage(arrayOfImages){

let html = "";

    if(Array.isArray(arrayOfImages)){

        arrayOfImages.forEach(function(image){
            
            if(typeof image == "string"){
                html = "";
                html += `<ul>`;
                   html += `<li><img src="${pathToImages}/jana.jpg" alt="jana.jpg"></li>`;
                   html += `<li><img src="${pathToImages}/jane.jpg" alt="jane.jpg"></li>`;
                   html += `<li><img src="${pathToImages}/jim.jpg" alt="jim.jpg"></li>`;
                   html += `<li><img src="${pathToImages}/joe.jpg" alt="joe.jpg"></li>`;
                html += `</ul>`;  

            }else{
                html = '<strong class= "important2" >ERROR!</strong> This is not a string of array...';
                return;
            }

        });

    }else{
        html += '<strong class= "important2" >ERROR!</strong> This is not an array...';
    }

    return html;

}


/* Part 02*/

function displayListingLinks(arrayOfLinks){

    html = "";

    if(Array.isArray(arrayOfLinks)){
        html += "yes this is an array";
        arrayOfLinks.forEach(function(link){
            
            if(typeof link == "string"){
                html = "";
                html += `<ul>`;
                   html += `<li><a class="botton" href="https://bcit.ca">BCIT Website</a></li>`;
                   html += `<li><a class="botton" href="https://learn.bcit.ca">BCIT Learning Hub</a></li>`;
                   html += `<li><a class="botton" href="https://www.bcit.ca/study/courses/comp2132">BCIT Comp2132</a></li>`;
                   html += `<li><a class="botton" href="https://www.bcit.ca/study/courses/comp2913">BCIT Comp2913</a></li>`;
                   html += `<li><a class="botton" href="https://www.bcit.ca/study/courses/comp2909">BCIT Comp2909</a></li>`;
                html += `</ul>`;  

            }else{
                html = '<strong class= "important2" >ERROR!</strong> Please provide an array of link URLs';
                return;
            }

        });

    }else{
        html += '<strong class= "important2" >ERROR!</strong> This is not an array...';
    }

    return html;
}


/* Part 03 */

function displayListingNames(arrayOfNames, list = "ul"){
    html = "";
    let validArrayLength = 3;
  
    if(Array.isArray(arrayOfNames)){

        if(arrayOfNames.length > validArrayLength){
                
                if(list == "ol"){
                    html += `<ol>`;
                    arrayOfNames.forEach(function (name){
                        html += `<li>${name}</li>`;                     
                    });
                    html += `</ol>`;
                    
                }else if(list == "ul"){
                    html += `<ul>`;
                    arrayOfNames.forEach(function (name){
                        html += `<li>${name}</li>`;
                    });
                    html += `</ul>`;

                }else{
                    html = '<strong class= "important2" >ERROR!</strong> There is an invalid value for the second parameter... The valid values are only "ol" or "ul"...';
                }

        }else{
            html += '<strong class= "important2" >ERROR!</strong> This a string of array, but this array is too small...';
        }

    }else{   
        html += '<strong class= "important2" >ERROR!</strong> This is not an array...';
    }

    return html;
}
