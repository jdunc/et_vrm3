$(document).ready(function(){
  console.log('page loaded');
  $('#tapit').click(function(){
    console.log('clicked');
    window.location.href = "/adult.html";
  });
  $('#tapit2').click(function(){
    console.log('clicked');
    window.location.href = "/child.html";
  });
});
