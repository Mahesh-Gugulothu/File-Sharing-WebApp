$("form[name=register]").submit(function(e){
    
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

    $.ajax({
        url:"/user/signup",
        type: "POST",
        data: data,
        dataType: "json",
        success: function(resp){
            window.location.href = "/user";
        },
        error: function(resp){
            console.log(resp);
            $error.text(resp.responseJSON.error).removeclass("error--hidden");
        }
    });
    e.preventDefault();
});

$("form[name=login]").submit(function(e){
    
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

    $.ajax({
        url:"/user/login",
        type: "POST",
        data: data,
        dataType: "json",
        success: function(resp){
            window.location.href = "/user";
        },
        error: function(resp){
            console.log(resp);
            $error.text(resp.responseJSON.error).removeclass("error--hidden");
        }
    });
    e.preventDefault();
});

