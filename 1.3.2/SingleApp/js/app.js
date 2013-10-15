function library( module ) {

  $( function() {
    if ( module.init ) {
      module.init();
    }
  });

  return module;
}

var emailValidation = library(function () {
  return {
    emailField:'',  
    init: function () {
      // module implementation
    },
    displayAlert: function(){
     $( "#popupBasic" ).popup( "open" );  
    },
    changePage: function(page){
         $.mobile.changePage(page, { transition: "pop", reverse: false,changeHash: false });
    },
    showMessage:function(){
     $('#content').text('Welcome: ' + this.emailField + " the first that we need to do is ....");
    }
  };
}());


    $(document).on('pageinit', '#login', function(){
           
            $('form').submit(function(){
                emailValidation.emailField = $('[name=email]').val();
                if( !emailValidation.emailField ){
                    emailValidation.displayAlert();
                }else{
                    emailValidation.changePage('#main');
                }
                return false;        
            });
            
        });


        $(document).on('pageinit', '#main', function(){
               emailValidation.showMessage();
        });