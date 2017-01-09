$(document).ready(function(){
  console.log('adult js loaded');
 $('#tapit3').click( function(e){
   e.preventDefault();
   let formData = {};
   $('.adultFormInfo').each(function(){
      //  console.log($(this));
       formData[this.name] = $(this).val();
   });
   formData['pay'] = 'now';
   console.log('form info:',formData);
   $.ajax({
     method: "POST",
     data: JSON.stringify(formData),
     url: '/adult',
     dataType: 'json',
     contentType: 'application/json; charset=UTF-8'
   })
   .then((data) => {
     console.log('database info submitted:',data);
     $.ajax({
       method: "POST",
       data: JSON.stringify(formData),
       url: '/email-adult',
       dataType: 'json',
       contentType: 'application/json; charset=UTF-8'
     })
   })
   .then((data) => {
     window.location.href = "/checked-in";
   })
 });//end on click submit
 $('#payLater').click( function(e){
   e.preventDefault();
   let formData = {};
   $('.adultFormInfo').each(function(){
      //  console.log($(this));
       formData[this.name] = $(this).val();
   });
   formData['pay'] = 'later';
   console.log('form info:',formData);
   $.ajax({
     method: "POST",
     data: JSON.stringify(formData),
     url: '/adult',
     dataType: 'json',
     contentType: 'application/json; charset=UTF-8'
   })
   .then((data) => {
     console.log('database info submitted:',data);
     $.ajax({
       method: "POST",
       data: JSON.stringify(formData),
       url: '/email-adult',
       dataType: 'json',
       contentType: 'application/json; charset=UTF-8'
     })
   })
   .then((data) => {
     window.location.href = "/checked-in";
   })
 });//end on click submit without payment
}) //end on document ready
