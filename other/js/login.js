var allowContinue = false;
$(document).ready(function(){
    $("#login-form").submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        $("#login_btn").removeAttr("disabled");
            login();
        return false;
    });/**/
    
    
    // FORM VALIDATION
    // =================================================================
    $('#login-form').bootstrapValidator({
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            login: {
                validators: {
                    notEmpty: {
                        message: 'El nombre de usuario es requerido'
                    }
                }
            },
            clave: {
                validators: {
                    notEmpty: {
                        message: 'La contraseÃ±a es requerida'
                    },
                    regexp: {
                            regexp: /^[a-zA-Z0-9_\.@#$%&*-+\/{}[\]!"-]+$/,
                            message: 'La contraseÃ±a solo puede ser alfanumerica, sin espacios'
                    }
                }
            }
        }
    }).on('success.form.bv', function(e, data) {
        allowContinue = true;
    }).on('error.form.bv', function(e, data) {
        allowContinue = false;
    });
    
});

    $("#login-form").submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        $("#login_btn").removeAttr("disabled");
        if (allowContinue){
            login();
        }
        return false;
    });


   function login(){
console.log("ds");

   }