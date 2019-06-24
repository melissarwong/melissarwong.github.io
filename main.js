$(document).ready(function() {
    AOS.init({
    duration: 1600,
  })
});

/* --------------------------------------------------------------------------- */

//typing name
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = ["                  ", "MELISSA WONG"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 3000);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 200000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

/* --------------------------------------------------------------------------- */

//progress bar
$(document).ready(function() {
  window.onscroll = function() {myFunction()}; // When the user scrolls the page, execute myFunction 

  function myFunction() {    
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.scrollHeight - document.body.clientHeight;
    var scrolled = (winScroll / height) * 100;

    document.getElementById("myBar").style.width = scrolled + "%";
  }
});

/* --------------------------------------------------------------------------- */

//switch button between home backgrounds
$(document).ready(function() {
  $('input[type="checkbox"]').click(function(){
      if($(this).is(":checked")){
         $('.main').css("background-image", "url(homebackground-dark5.png)");  
         $('body').css("background-color", "#101539");  
         $('.button').css("background-image", "linear-gradient(to right, #F8D859, #2C9698)");  
         $('.progress-bar').css("background", "#1E344E"); 
         $('#squiggle').attr("src", "bluesquiggle.png"); 
         $('#about-header').attr("src", "bluedot.png"); 
         $('#tldr').attr("src", "blue-tldr.png"); 
         $('#boxx').attr("src", "bluebox.png"); 
         $('#port-box').attr("src", "port-bluebox.png"); 
         $('#port-head').attr("src", "port-headblue.png");
         $('#cont-box').attr("src", "cont-bluebox.png"); 
         $('#cont-head').attr("src", "cont-headblue.png"); 
         $('.container').css("background-color", "#0F1238");  
      }

      else if($(this).is(":not(:checked)")){
         $('.main').css("background-image", "url(homebackground8.png)");
         $('body').css("background-color", "#170D2F");  
         $('.button').css("background-image", "linear-gradient(to right, #F8D759, #EE5E4F)");
         $('.progress-bar').css("background", "#75133A");  
         $('#squiggle').attr("src", "redsquiggle.png"); 
         $('#about-header').attr("src", "reddot.png"); 
         $('#tldr').attr("src", "red-tldr.png"); 
         $('#boxx').attr("src", "redbox.png");
         $('#port-box').attr("src", "port-redbox.png"); 
         $('#port-head').attr("src", "port-headred.png");  
         $('#cont-box').attr("src", "cont-redbox.png"); 
         $('#cont-head').attr("src", "cont-headred.png");  
         $('.container').css("background-color", "#12062C");  
      }
  });
});

/* --------------------------------------------------------------------------- */

//beginning parallax code
$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value
    
    $(".button").css("transform",'translate(-50%,'+scrollval/3+'%)');
    $(".bounce").css("transform",'translate(-50%,'+scrollval/1.5+'%)');
    $("#boxx").css("transform",'translate(0px,'+scrollval/21+'%)');
});

/* --------------------------------------------------------------------------- */

//nav bar jump-to directions and actions
$(document).ready(function(){
  $("#link1").click(function(){
    $path=$("#about").offset().top;
    $('body').animate({scrollTop:$path},1000);
  });
  $("#link2").click(function(){
    $path=$("#portfolio").offset().top;
    $('body').animate({scrollTop:$path},1000);
  });
  $("#link3").click(function(){
    $path=$("#contact").offset().top;
    $('body').animate({scrollTop:$path},1000);
  });
  $(".button").click(function(){
    $path=$("#about").offset().top;
    $('body').animate({scrollTop:$path},1000);
  });
  $(".to-top").click(function(){
    $path=$("body").offset().top;
    $('body').animate({scrollTop:$path},1000);
  });
});
