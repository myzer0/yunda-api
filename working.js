jQuery(document).ready( function( $ ){
 $('form#update_shipment').on('submit', function( e ){
    e.preventDefault();
    var shipment = $( 'input[name="shipment"]' ).val();
//    var shipperName = $( 'input[name="wpcargo_shipper_name"]' ).val();
//   var receiveName = $( 'input[name="wpcargo_receiver_name"]' ).val();
    var status = $( 'input[name="wpcargo_status"]' ).val();
 	var remarks = $( 'input[name="cargo_comments"]' ).val();
 	var deliverydate = $( 'input[name="delivery_date"]' ).val();
 	var driverdetails = $( 'input[name="driverdetails"]' ).val();
  
    $.ajax({
      type:"POST",
      dataType:"JSON",
      data:{
         action:'update_shipment', 
         shipment:shipment,
//         shipperName:shipperName,
//         receiveName:receiveName,
      	 remarks:remarks,
         deliverydate:deliverydate,
         driverdetails:driverdetails,
         status:status                  
      },
      url : demoAjaxHandler.ajaxurl,
      beforeSend:function(){
        //** Proccessing
        console.log( 'loading...' );
      },
      success:function(response){
        //** Process Completed
        alert('success');
        location.reload();
        console.log( response )
      }
    });
  });
});
