

//Обязатеьно оптимизиторвать js скрипт для слайдера
// Сделать общую функцию для добавлению слайдеров без
// правки скрипта

/* Сладер для блока кейсов */

var slideIndex_porfolio = 1;
showSlides_porfolio(slideIndex_porfolio);



function plusSlides_porfolio(n) {
    

   var index = showSlides_porfolio(slideIndex_porfolio += n);


  }

function currentSlide_porfolio(n) {

var index = showSlides_porfolio(slideIndex_porfolio = n);
}

function showSlides_porfolio(n) {
    var i;

    var slides_portfolio = document.querySelectorAll('div.fade-portfolio');
    var dots_portfolio = document.querySelectorAll('span.dot-portfolio');
    var counter_portfolio = document.querySelector('div.counter-portfolio');

   // var slides_feedback = document.querySelectorAll('div.fade-feedback');
   // var dots_feedback = document.querySelectorAll('span.dot-feedback');
   // var counter_feedback = document.querySelector('div.counter-feedback');



    if (n > slides_portfolio.length) {
        slideIndex_porfolio = 1;
    }

    if (n < 1) {
       slideIndex_porfolio = slides_portfolio.length;
    }

    for ( i = 0; i < slides_portfolio.length; i++) {
        
        slides_portfolio[i].style.display = "none";
        
    }

    for ( i = 0; i < dots_portfolio.length; i++) {
        
        dots_portfolio[i].className = dots_portfolio[i].className.replace("active","");
    }

   slides_portfolio[slideIndex_porfolio-1].style.display = "block";
   dots_portfolio[slideIndex_porfolio-1].className += " active";
   counter_portfolio.innerHTML = slideIndex_porfolio+"/4";

    
    return slideIndex_porfolio;

  }



 function autoplay_porfolio() {
     
     interval = setInterval(play, 4000);

    i = 1;
     function play()
     {plusSlides_porfolio(1);}

    }
autoplay_porfolio();





/* Сладер для блока фидбека */

var slideIndex_feedback = 1;
showSlides_feedback(slideIndex_feedback);



function plusSlides_feedback(n) {
    

   var index = showSlides_feedback(slideIndex_feedback += n);


  }

function currentSlide_feedback(n) {

var index = showSlides_feedback(slideIndex_feedback = n);
}

function showSlides_feedback(n) {
    var i;

    var slides_feedback = document.querySelectorAll('div.fade-feedback');
    var dots_feedback = document.querySelectorAll('span.dot-feedback');
 
  if (n > slides_feedback.length) {
        slideIndex_feedback = 1;
    }

    if (n < 1) {
       slideIndex_feedback = slides_feedback.length;
    }

    for ( i = 0; i < slides_feedback.length; i++) {
        
        slides_feedback[i].style.display = "none";
        
    }

    for ( i = 0; i < dots_feedback.length; i++) {
        
        dots_feedback[i].className = dots_feedback[i].className.replace("active","");
    }

   slides_feedback[slideIndex_feedback-1].style.display = "block";
   dots_feedback[slideIndex_feedback-1].className += " active";
   //counter_feedback.innerHTML = slideIndex_porfolio+"/4";

    
    return slideIndex_feedback;

  }


/*
 function autoplay_feedback() {
     
     interval = setInterval(play, 4000);

    i = 1;
     function play()
     {plusSlides_feedback(1);}
     
    }
autoplay_feedback();
*/



