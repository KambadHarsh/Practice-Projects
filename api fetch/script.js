

        var qoutes;
        async function getQoutes() {
            var rawResponse = await fetch('https://api.quotable.io/quotes?tags=happiness');   // get quote from api  
            var response = await rawResponse.json()

            console.log(response)

             qoutes = response             //save the quote in a varaiable 
             
             if (qoutes.results)
              {
                var authors = [...new Set(qoutes.results.map(qoute => qoute.author))]
                var qouteContent = qoutes.results[0];
                var qouteContentHtml = document.getElementById('content');
                var qouteContentAuthorHtml = document.createElement('span'); // create an span element 
                qouteContentHtml.textContent = qouteContent.content;
                qouteContentAuthorHtml.className = "qoute-author";
                qouteContentAuthorHtml.textContent = "- "+qouteContent.author; 
                qouteContentHtml.appendChild(qouteContentAuthorHtml)
                var authorHtml = document.getElementById('author')
                console.log(authorHtml)
                document.getElementById('generate').onclick = function(){
                    var index = getRandom(0,qoutes.results.length)
                    console.log(index,qoutes.results)
                    let randomQoute = qoutes.results[index]
 
                var randomQouteContentAuthorHtml = document.createElement('span') 
                qouteContentHtml.textContent = randomQoute.content;
                randomQouteContentAuthorHtml.className = "qoute-author";
                randomQouteContentAuthorHtml.textContent = "- "+randomQoute.author; 
                qouteContentHtml.appendChild(randomQouteContentAuthorHtml)
                }
                    authors.forEach(element => {
                    var option = document.createElement("option")                  // for selection menu
                    option.value = element
                    option.text = element
                    authorHtml.appendChild(option)
                });
                console.log(authors)

                



                
                 // change color on click 

               var redcolor = document.getElementById('redBtn');

               redcolor.addEventListener('click', function onClick() {
                qouteContentHtml.style.color= 'red';

                });

                // blue
                var bluecolor = document.getElementById('blueBtn');

               bluecolor.addEventListener('click', function onClick() {
                qouteContentHtml.style.color= 'blue';
                });

                // green
                var greencolor = document.getElementById('greenBtn');

               greencolor.addEventListener('click', function onClick() {
                qouteContentHtml.style.color= 'green';
                });

                var yellowcolor = document.getElementById('yellowBtn');

                // yellow 
               yellowcolor.addEventListener('click', function onClick() {
                qouteContentHtml.style.color= 'yellow';
                });

            //    purple 
                var purplecolor = document.getElementById('purpleBtn');

               purplecolor.addEventListener('click', function onClick() {
                qouteContentHtml.style.color= 'purple';
                });

                           
             //download 

              document.getElementById("download").onclick = function(){
                var screenshotTarget = document.getElementById('content');

                html2canvas(screenshotTarget).then((canvas)=> {
                    var baseImage = canvas.toDataURL("image\PNG");   
                 /*    console.log(baseImage); */

                    // download link
                     var anchor = document.createElement('a');
                     anchor.setAttribute("href", baseImage);
                     anchor.setAttribute("download", "Quote.png")
                     anchor.click();
                     anchor.remove();
                });
              };
                


            }

        }
        getQoutes()
        
        
        function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

      



