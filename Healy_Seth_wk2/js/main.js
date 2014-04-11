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

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");



}); 

  