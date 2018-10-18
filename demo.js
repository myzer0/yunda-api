jQuery(document).ready( function( $ ){
//console.log( demoAjaxHandler.ajaxurl );
 $('form#update_shipment').on('submit', function( e ){
    e.preventDefault();
    var shipment = $( 'input[name="shipment"]' ).val();
    var shipperName = $( 'input[name="wpcargo_shipper_name"]' ).val();
    var receiveName = $( 'input[name="wpcargo_receiver_name"]' ).val();
    var status = $( 'select[name="wpcargo_status"]' ).val();
  
    $.ajax({
      type:"POST",
      //dataType:"JSON",
      data:{
         action:'update_shipment', 
         shipment:shipment,
         shipperName:shipperName,
         receiveName:receiveName,
         status:status
      },
      url : demoAjaxHandler.ajaxurl,
      beforeSend:function(){
        //** Proccessing
        console.log( 'loading...' );
      },
      success:function(response){
        //** Process Completed
        console.log('Done');
        console.log( response )
      }
    });
  });
});
