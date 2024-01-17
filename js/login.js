import { validateLogin } from "./functions.js";
const button = document.querySelector("#button");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateLogin(username, email, password)) {
      let user = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      fetch("https://auth-rg69.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message == "User Not found.") {
            alert("Bunday foydalanuvchi topilmadi");
            form.reset();
          }
          if (data.message == "Invalid Password!") {
            alert("Parolni noto'gri kiritdingiz !");
            form.reset();
          }

          localStorage.setItem('accessToken' , data.accessToken)
          localStorage.setItem('user' , JSON.stringify(data));

          let globalUrl = window.location.href.substring(0,window.location.href.search('/pages'))
          window.location.assign ( `${globalUrl}/index.html`)
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("validatsiyadan o'tmadi");
    }
  });
