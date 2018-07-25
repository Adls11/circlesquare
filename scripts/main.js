var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    
   var index = showSlides(slideIndex += n);

  }


function currentSlide(n) {

var index = showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.querySelectorAll('div.mySlides');
    var dots = document.querySelectorAll('span.dot');
    var counter = document.querySelector('div.counter');


    if (n > slides.length) {
        slideIndex = 1;

    }
    if (n < 1) {
       slideIndex = slides.length;
    }

    for ( i = 0; i < slides.length; i++) {
        
        slides[i].style.display = "none";
        
    }

    for ( i = 0; i < dots.length; i++) {
        
        dots[i].className = dots[i].className.replace("active","");
    }

   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   counter.innerHTML = slideIndex+"/4";




   //var textSlides = document.querySelectorAll('div.numbertext');
  // textSlides[slideIndex -1].innerHTML = "1/" + slideIndex;

  return slideIndex;

  }



 function autoplay()
 {
     
     interval = setInterval(play, 4000);

    i = 1;

     function play()
     {

        plusSlides(1);
     	
     }
    


 }

 autoplay();



  

