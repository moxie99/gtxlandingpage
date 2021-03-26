let topPanel = document.getElementById('top-panel');
let body = document.getElementById('body');
let navigation = document.getElementById('menuItems');
body.addEventListener('scroll', displayTopPanel);
let navBar = document.getElementById('navbar');

body.addEventListener('onload', noMargin);

function displayTopPanel(){

	topPanel.style.display = "flex";
	
}

function noMargin(){
	navBar.style.margin-top = 0;
}



const totalCategories = categories.length;


let agbadaButton = document.getElementById('agbadabutton');
agbadaButton.addEventListener('click', carousel);

let kaftanButton = document.getElementById('kaftanbutton');
kaftanButton.addEventListener('click', carousel);

let ofiButton = document.getElementById('ofibutton');
ofiButton.addEventListener('click', carousel);

let shirtsButton = document.getElementById('shirtsbutton');
shirtsButton.addEventListener('click', carousel);

let suitsbutton = document.getElementById('suitsbutton');
suitsbutton.addEventListener('click', carousel);

let urbanButton = document.getElementById('urbanbutton');
urbanButton.addEventListener('click', carousel);

var myIndex = 0;

function carousel() {
    var i;
    const categories = document.getElementsByClassName('categories');
    for (i = 0; i < categories.length; i++) {
       categories[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > categories.length) {myIndex = 1}    
    categories[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000);  
}



