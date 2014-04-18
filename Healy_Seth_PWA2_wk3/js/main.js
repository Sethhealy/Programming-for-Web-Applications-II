                                    //slider start//
jQuery(document).ready(function($){

  var sliderCount= $('#myslider ul li').length;
  var sliderWidth= $('#myslider ul li').width();
  var sliderHeight= $('#myslider ul li').height();
  var sliderUlWidth= sliderCount * sliderWidth;

  $('#myslider').css({ width: sliderWidth, height: sliderHeight});
  $('#myslider ul').css({ width: sliderUlWidth, marginLeft: -sliderWidth});
  $('#myslider ul li:last-child').prependTo('#slider ul');

  function moveLeft(){

    $('#myslider ul').animate({
      left: + sliderWidth
    }, 200, function(){
      $('#myslider ul li:last-child').prependTo('#myslider ul');
      $('#myslider ul').css('left', '');
    });
    };

    function moveRight(){

      $('#myslider ul').animate({
        left: -sliderWidth
      }, 200, function (){
        $('#myslider ul li:first-child').appendTo('#myslider ul');
        $('#myslider ul').css('left', '');
    });
    };  
  
    $('a.control_prev').click(function(){
      moveLeft();
    });

    $('a.control_next').click(function(){
      moveRight();
    });

                                      //Slider stop//


                                      // Accordian start //

    var allPanels = $('.accordion > dd');

    allPanels.hide();
    
    $('.accordion > dt').click(function() {
      allPanels.slideUp();
      $(this).next().slideDown();
      return false;
    });
  
 
                                      // Accordian stop //


  $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });

  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  
  $('ul.tabs li').last().addClass("tab_last");





$(function(){
  $('#signinButton').click(function(e){
     e.preventDefault();
    var user =$('#user').val();
    var pass =$('#pass').val();
    console.log("This notifies you if the password is working");
    
    $.ajax({
      url:'xhr/login.php',
      type:'post',
      dataType:'json',
      data:{
        username:user,
        password:pass
      },
      success:function(response){
        console.log("Test User");
        if(response.error){
          alert(response.error);
        } else{
          window.location.assign('admin.html')
        };
      }
    });
  });
});

$('.projectsbtn').on('click', function(e){
  e.preventDefault();
  window.location.assign('projects.html');
});


var welcomeSound = document.getElementById('welcomeSound');
var welcomeTxt=document.getElementById('welcomeTxt');
welcomeTxt.onmouseover=function(){
 welcomeSound.play();
 return false;
};


welcomeTxt.onmouseout=function(){
 welcomeSound.pause().delay(1000);
 console.log("click")
};



$('.addbtn').on('click', function(e){
  e.preventDefault();
  window.location.assign('add.html');
});



$('#signOut').click(function(e){
  console.log('logout');
  e.preventDefault();
  $.get('xhr/logout.php', function(){
    window.location.assign('index.html')
  })
});

});














  