$(document).ready(function(){
  console.log('child js loaded');
 $('#tapit3').click( function(e){
   e.preventDefault();
   let formData = {};
   $('.childFormInfo').each(function(){
      //  console.log($(this));
       formData[this.name] = $(this).val();
   });
   formData['medication-change'] = $('input[name=medicationInfo]:checked').val();
   formData['pay'] = 'now';
   console.log('form info:',formData);
   $.ajax({
     method: "POST",
     data: JSON.stringify(formData),
     url: '/child',
     dataType: 'json',
     contentType: 'application/json; charset=UTF-8'
   })
   .then((data) => {
     console.log('submitted:',data);
   })
 });//end on click submit with payment

 $('#payLater').click( function(e){
   e.preventDefault();
   let formData = {};
   $('.childFormInfo').each(function(){
      //  console.log($(this));
       formData[this.name] = $(this).val();
   });
   formData['medication-change'] = $('input[name=medicationInfo]:checked').val();
   formData['pay'] = 'later';
   console.log('form info:',formData);
   $.ajax({
     method: "POST",
     data: JSON.stringify(formData),
     url: '/child',
     dataType: 'json',
     contentType: 'application/json; charset=UTF-8'
   })
   .then((data) => {
     console.log('database info submitted:',data);
   })
 });//end on click submit without payment
}) //end on document ready
