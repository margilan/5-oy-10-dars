function validate(username , email , password , confirmPassword){
    if(!username.value){
        alert('Username not found')
        username.value = '';
        username.focus();
        return false

    }

    if(username.value.lenght <= 5){
        alert('Username should be more than 5 characters')
        username.value = '';
        username.focus()

        return false
    }

    if(!email.value){
        alert('empty with no email entered')
        email.value = '';
        email.focus()

        return false
    }

    if(!password.value){
        alert('empty with no password entered')
        password.value = '';
        password.focus()
        return false
    }

    if(!confirmPassword.value){ 
       alert('empty with no confirm password entered')
        confirmPassword.focus()
        return false
    }

    if(!password.value == confirmPassword){
        alert('The password with the confirmation password did not match')
        password.focus();
        return false
    }


    return true
}
function validateLogin(username , email , password){
    if(!username.value){
        alert('Username not found')
        username.value = '';
        username.focus();
        return false

    }

    if(username.value.lenght <= 5){
        alert('Username should be more than 5 characters')
        username.value = '';
        username.focus()

        return false
    }

    if(!email.value){
        alert('empty with no email entered')
        email.value = '';
        email.focus()

        return false
    }

    if(!password.value){
        alert('empty with no password entered')
        password.value = '';
        password.focus()
        return false
    }

    return true
}

export{validate , validateLogin}