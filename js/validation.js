function validateLoginInput()
{
    $("#login_form").validate({
        rules: 
        {
            username: "required",
            password: "required"
        },
        messages: 
        {
            username: "<br>This field must be filled<br>",
            password: "<br>This field must be filled<br>"
        },
        submitHandler: function()
        {
            CheckLogin();
        }
    });
}


function checkRegisteration()
{
    $.validator.addMethod("checkPassword", function(v, ele, param)
    {
        if ((/[A-Z]/.test(v) && /[0-9]/.test(v)))
        {
            return true;
        }
        return false;
    }, "<br>password must have at least 1 uppercase and 1 number<br>")

    $.validator.addMethod("checkName", function(v, ele, param)
    {
        if ((!/[0-9]/.test(v)))
        {
            return true;
        }
        return false;
    }, "<br>No number should be in the name<br>")

    $("#register_form").validate({
        rules: {
            reg_username:"required",
            first_name: "required",
            last_name: "required",
            email:{
                required: true,
                email: true
            },
            reg_password: {
                required: true,
                minlength: 6
            },
            date:{
                required: true,
                date: true
            } 
        },
        messages: {
            reg_username:{
                required: "<br>This field must be filled<br>"
            } ,
            reg_password: {
                required: "<br>This field must be filled<br>",
                minlength: "<br>Your password must be at least 6 character<br>"
            } ,
            first_name:{
                required: "<br>This field is required<br>"
            } ,
            last_name: {
                required: "<br>This field is required<br>"
            } ,
            email:
            {
                required: "<br>Please enter a valid email address<br>",
                email: "<br>mail<br>"
            },
            date: "<br>This field is required"
        },
        submitHandler: function()
        {
            NewUser();
        }
    });
}

function CheckSetting()
{
    $("#setting_menu_form").validate({
        rules: 
        {
            game_food:
            {
                required: true,
                min: 50,
                max: 90
            },
            game_time:
            {
                required: true,
                min: 60
            },
            monster_number:
            {
                required: true,
                min: 1,
                max: 4
            }
        },
        messages: 
        {
            game_food:
            {
                required: "<br>This field must be filled<br>",
                min: "<br>Need to be greater or equal to 50<br>",
                max: "<br>Need to be smaller or equal to 90<br>"
            },
            game_time:
            {
                required: "<br>This field must be filled<br>",
                min: "<br>Need to be greater or equal to 60<br>"
            },
            monster_number:
            {
                required: "<br>This field must be filled<br>",
                min: "<br>Need to be greater or equal to 1<br>",
                max: "<br>Need to be smaller or equal to 4<br>"
            }
        },

        submitHandler: function()
        {
            SaveSetting();
        }
    });

}





