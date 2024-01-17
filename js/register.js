import { validate } from "./functions.js";
const button = document.querySelector('#button')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm')
const form = document.querySelector('#form')




button && button.addEventListener('click' , function(e){
    e.preventDefault();
    if(validate(username , email , password , confirmPassword )){
        let user = {
            username:username.value,
            email:email.value,
            password:password.value,
        }

        fetch('https://auth-rg69.onrender.com/api/auth/signup' , {
            method:"POST",  // yuborish uchun
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.message == "Failed! Username is already in use!"){
                alert('Failed! Username is already in use!')
                username.value = '';
                username.focus();
            }
        if(data.message == 'User registered successfully!'){
            let globalUrl = window.location.href.substring(0,window.location.href.search('/pages'))
            window.location.assign ( `${globalUrl}/pages/login.html`)
        }
        })
        .catch(err =>{
            console.log(31 ,err)
        })

    } else{ 
        console.log("validatsiyadan o'tmadi")
    }
})