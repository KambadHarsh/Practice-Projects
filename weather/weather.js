// const api="ecdaf2f4cdaa0be993d86712194a87ea";
const url=  "https:wttr.in/London?format=3"


fetch(url)
.then(response => response.json())
.then(data => console.log("weather responsive",data))
.catch(error=> console.error(error))




function searchByCity(){
    var place= document.getElementById('input').value;
    var urlsearch= "https:wttr.in/London?format=3"
   
    fetch(urlsearch)
    .then(res=>{return res.json(); })
    .then(data=>{console.log(data);
    weatherReport(data);
    })
    document.getElementById('input').value='';
}
