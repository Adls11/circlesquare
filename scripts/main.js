
/*
$(window).load(function() {
  $("#preload-main").find('.logo').fadeOut().end().delay(400).fadeOut('slow');
});
*/

//Обязатеьно оптимизиторвать js скрипт для слайдера
// Сделать общую функцию для добавлению слайдеров без
// правки скрипта

/* Слайдер для блока кейсов */

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
     
     interval = setInterval(play, 10000);

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


//Для первого слайдера

//-250

 $(".fade-header").animate({
    top: "0"
      }, 1);

$("#slide-header-1").click(function(){
     
      $(".fade-header").animate({
    top: "0"
      }, 1);
     
     $("#slide-header-1").css({background:"black"});
     $("#slide-header-2").css({background:"#C4C4C4"});
     $("#slide-header-3").css({background:"#C4C4C4"});
     $("#slide-header-4").css({background:"#C4C4C4"});

});

$("#slide-header-2").click(function(){
     
      $(".fade-header").animate({
    top: "-250"
      }, 1);

  $("#slide-header-1").css({background:"#C4C4C4"});
  $("#slide-header-2").css({background:"black"});
  $("#slide-header-3").css({background:"#C4C4C4"});
  $("#slide-header-4").css({background:"#C4C4C4"});

});

$("#slide-header-3").click(function(){
     
      $(".fade-header").animate({
    top: "-500"
      }, 1);

  $("#slide-header-1").css({background:"#C4C4C4"});
  $("#slide-header-2").css({background:"#C4C4C4"});
  $("#slide-header-3").css({background:"black"});
  $("#slide-header-4").css({background:"#C4C4C4"});
});

$("#slide-header-4").click(function(){
     
      $(".fade-header").animate({
    top: "-750"
      }, 1);

  $("#slide-header-1").css({background:"#C4C4C4"});
  $("#slide-header-2").css({background:"#C4C4C4"});
  $("#slide-header-3").css({background:"#C4C4C4"});
  $("#slide-header-4").css({background:"black"});
});



/* load */

/*
  $(".header-page").animate({
  	display: "none"
  	},10);
*/



/* Скрипты для прокрутки */

function animate_menu() {
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
}

// n - иднекс позиционирования
// функция для смены положения блока 
function animate_position(n) {
    
    $(".header-page").animate({
    top: "-"+(n*document.documentElement.clientHeight)
  }, 1 );

 $(".portfolio").animate({
    top: "-"+(n*document.documentElement.clientHeight)
  }, 1);

 $(".feedback").animate({
    top: "-"+(n*document.documentElement.clientHeight)
  }, 1 );


   $(".crew").animate({
    top: "-"+(n*document.documentElement.clientHeight)
  }, 1 );
    
   $(".contact").animate({
    top: "-"+(n*document.documentElement.clientHeight)
  }, 1 );

}

function setmenu(name,color) {

   $(".menu-caption").text(name);
   $(".menu-caption").css({color:color});
   $(".menu-list li").css({color:color});
   $(".menu-logo svg").css({stroke:color});
   $(".linemove").css({background:color});
}



$("#frame-header").click(function(){

    animate_position(1);

});

$("#frame-portfolio").click(function(){

  animate_position(1);
  animate_menu();
  setmenu("showcase","white");

});




$("#frame-feedback").click(function(){

  animate_position(2);
  animate_menu();
  setmenu("Parthners","black");

});




$("#frame-crew").click(function(){

  animate_position(3);
  animate_menu();
  setmenu("Crew","black");


});

$("#frame-contact").click(function(){
       
   animate_position(4); 
   animate_menu();
   setmenu("Contact","white");



});

$(".main-frame").css({height:""+document.documentElement.clientHeight+"px"});
$(".frame-cont").css({height:""+document.documentElement.clientHeight+"px"});
$(".fade-portfolio").css({height:""+document.documentElement.clientHeight+"px"});



//динамически меняет высоту контейнеров
window.onresize = function () {
   $(".main-frame").css({height:""+document.documentElement.clientHeight+"px"});
   $(".frame-cont").css({height:""+document.documentElement.clientHeight+"px"});
   $(".fade-portfolio").css({height:""+document.documentElement.clientHeight+"px"});     
}


//скроллинг


window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  alert(scrolled);
}







