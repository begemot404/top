$(document).ready(function () {
	
	$(".code").prop( "disabled", true ); //Disable
	
	
			    $('.popup-inline').magnificPopup({
					type: 'inline',
					closeOnContentClick: false
				});
				
				//E-mail Ajax Send
 //   $("form").submit(function () { //Change
  //      var data = $(this).find(':input[type="text"], :input[type="email"], :input[type="hidden"]').serialize();

   //     $.ajax({
   //         type: 'POST',
   //         url: "mail.php",
   //         data: data,
   //           success: function(ResultAjax){ // Действие при успешной обработке
   //           document.location.href = '/info';
   //         }
            // success: function () {
            //     $('.thank-you').css('display', 'block');
            // }
   //     });
   //     return false;
   // });

    $('.close-popup').click(function(e){
        e.preventDefault();

        $('form').trigger("reset");
        $('.thank-you').css('display', 'none');
    });

});

