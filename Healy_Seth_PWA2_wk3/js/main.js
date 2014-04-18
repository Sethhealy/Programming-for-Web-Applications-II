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


$('#register').on('click', function(){
  var username= $('#username').val(),
  email= $('#email').val(),
  password= $('#password').val();

  $.ajax({
    url:'xhr/register.php',
    type:'post',
    datatype:'json',
    data:{
      username:username,
      email:email,
      password:password
    },

    success: function(response){
      if (response.error){
        alert(reponse.error);
      }else{
        window.location.assign('admin.html');
      }
    }
  });
});

$('.projectsbtn').on('click', function(e){
  e.preventDefault();
  window.location.assign('projects.html');
});

$('.addbtn').on('click', function(e){
  e.preventDefault();
  window.location.assign('add.html');
});


$('#addButton').on('click', function(e){
  e.preventDefault();
  var projName =$('#projectName').val(),
  projDesc =$('#projectDescription').val(),
  projDue =$('#projectDueDate').val(),
  status =$('#projectStatus').val();

  $.ajax({
    url: "xhr/new_project.php",
    type: "post",
    datatype:"json",
    data:{
      projectName: projName,
      projectDescription: projDesc,
      dueDate: projDue,
      status:status
    },
    success:function(response){
      console.log('testing for success');

      if(response.error){
        alert(response.error);
      } else{
        window.location.assign("projects.html");
      };
    }
  });
});

var projects = function(){

    $.ajax({
      url: 'xhr/get_projects.php',
      type: 'get',
      dataType:'json',
      success: function(response){
        if(response.error){
          console.log(response.error);
        }else{
          for(var i=0, j=response.projects.length; i<j; i++){
            var result=response.projects[i];

            $(".projects").append(
              '<div style="border:1px solid black">'+
              " Project ID:" + result.id + "<br>" +
              "Project Name: " + result.projectName + "<br>" +
              "Project Description: " + result.projectDescription + "<br>" +
              '<button class="deletebtn"> Delete </button>'
              +'</div> <br>'
              );
          };

          $('.deletebtn').on('click', function(e){
            console.log('test delete');

            $.ajax({
              url: 'xhr/delete_project.php',
              data:{
                projectID: result.id
              },
              type: 'POST',
              dataType: 'json',
              success: function(response){
                console.log('testing for success');

                if(response.error){
                  alert(response.error);
                } else{
                  window.location.assign("projects.html");
                };
              }
            });
          });
        
   

// $('#signOut').click(function(e){
//   console.log('logout');
//   e.preventDefault();
//   $.get('xhr/logout.php', function(){
//     window.location.assign('index.html')
//   })
// });

// var welcomeSound = document.getElementById('welcomeSound');
// var welcomeTxt=document.getElementById('welcomeTxt');
// welcomeTxt.onmouseover=function(){
//  welcomeSound.play();
//  return false;
// };


// welcomeTxt.onmouseout=function(){
//  welcomeSound.pause().delay(1000);
//  console.log("click")
// };

});














  