

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





/* Скрипты для прокрутки */

$("#frame-portfolio").click(function(){
  $(".portfolio").animate({
    top: "0"
  }, 1000 );

 $(".feedback").animate({
    top: ""+document.documentElement.clientHeight
  }, 1000);
 $(".crew").animate({
    top: ""+document.documentElement.clientHeight
  }, 1000 );



   $(".menu-logo").animate({
       left: "300px"
    }, 300);

   $(".menu-caption").animate({
        opacity: 0
   }, 300);

     $(".menu-logo").animate({
       left: "0px"
    }, 300);

     $(".menu-caption").animate({
        opacity: 1
   }, 300);
   
   $(".menu-caption").text("showcase");
   $(".menu-caption").css({color:"white"});
   $(".menu-list li").css({color:"white"});
   $(".menu-logo svg").css({stroke:"white"});

});



//-500px
$("#frame-crew").click(function(){
  $(".portfolio").animate({
    top: "-"+document.documentElement.clientHeight
  }, 1000 );

 $(".feedback").animate({
    top: "-"+document.documentElement.clientHeight
  }, 1000 );
 $(".crew").animate({
    top: "-"+document.documentElement.clientHeight
  }, 1000 );

   
  $(".menu-logo").animate({
       left: "300px"
    }, 300);

   $(".menu-caption").animate({
        opacity: 0
   }, 300);

     $(".menu-logo").animate({
       left: "0px"
    }, 300);

     $(".menu-caption").animate({
        opacity: 1
   }, 300);


   $(".menu-caption").text("crew");
   $(".menu-caption").css({color:"black"});
   $(".menu-list li").css({color:"black"});
   $(".menu-logo svg").css({stroke:"black"});
});



//-1000px
$("#frame-feedback").click(function(){
  $(".portfolio").animate({
    top: "-"+(2*document.documentElement.clientHeight)
  }, 1000 );

 $(".feedback").animate({
    top: "-"+(2*document.documentElement.clientHeight)
  }, 1000 );
 $(".crew").animate({
    top: "-"+(2*document.documentElement.clientHeight)
  }, 1000 );

   $(".menu-logo").animate({
       left: "300px"
    }, 300);

   $(".menu-caption").animate({
        opacity: 0
   }, 300);

     $(".menu-logo").animate({
       left: "0px"
    }, 300);

     $(".menu-caption").animate({
        opacity: 1
   }, 300);

   $(".menu-caption").text("Parthners");
   $(".menu-caption").css({color:"black"});
   $(".menu-list li").css({color:"black"});
   $(".menu-logo svg").css({stroke:"black"});

});

$(".main-frame").css({height:""+document.documentElement.clientHeight+"px"});
$(".frame-cont").css({height:""+document.documentElement.clientHeight+"px"});
$(".fade-portfolio").css({height:""+document.documentElement.clientHeight+"px"});
//$(".cont-2").css({height:""+document.documentElement.clientHeight+"px"});
//$(".header").css({height:""+document.documentElement.clientHeight+"px"});














