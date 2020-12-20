console.log("Hello World");
var theToggle=document.getElementById("mytoggle");
var aboutMe=document.getElementById("aboutMe");
var photos=document.getElementById("photos");
var playLists=document.getElementById("playLists");
var funFacts=document.getElementById("funFacts");
var theBody=document.getElementsByTagName('body')[0];
var isDarkMode=false
function changeMode(){
  if(isDarkMode){
    theBody.setAttribute("class","lightmode");
    aboutMe.setAttribute("class","topMenuLightMode");
    photos.setAttribute("class","topMenuLightMode");
    playLists.setAttribute("class","topMenuLightMode");
    funFacts.setAttribute("class","topMenuLightMode");
    isDarkMode=false;
  } else {
    theBody.setAttribute("class","darkmode");
    aboutMe.setAttribute("class","topMenuDarkMode");
    photos.setAttribute("class","topMenuDarkMode");
    playLists.setAttribute("class","topMenuDarkMode");
    funFacts.setAttribute("class","topMenuDarkMode");
    isDarkMode=true;
  }
  console.log("hey this light mode");
}
theToggle.addEventListener("click",changeMode);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
