console.log('load form js');
// Variable to hold request
var request;
var scriptURL = "https://script.google.com/macros/s/AKfycbxTqlLuKJ_FRY_DodCnICFCJLDcR6h5pKAJLVbKLgL2mTUTbsM/exec";
// Bind to the submit event of our form

$("#registro form").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: scriptURL,
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);

        var form_name = $('#name').val();

        $("#registro form").remove();
				$("#registro .contact-container").append('<div class="success"><h3 class="name">'+ form_name +'</h3><br><p>¡Gracias por Pre-Registrarte a inFront!<hr/></p><p class="copy">!Muy pronto nos pondremos en contacto para darte acceso a tu Primer mes Gratis!</p></div>');

    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console


        $("#registro form").remove();
				$("#registro .contact-container").append('<div class="success"><h3 class="name">'+ form_name +'</h3><br><p>Parece que hubo un error<hr/></p><p class="copy">Porfavor intenta de nuevo recargando la página, si el problema persiste porfavor escribenos a info@infront.com</p></div>');

        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});
