function init() {

if(!localStorage.getItem("users")) {

const users = [

{
username:"admin",
password:"admin123",
balance:100000,
role:"admin"
}

];

localStorage.setItem(
"users",
JSON.stringify(users)
);

}

}

function showPage(id){

document
.querySelectorAll(".page")
.forEach(page=>{

page.classList.remove("active");

});

document
.getElementById(id)
.classList.add("active");

}

function register(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(!username || !password){

alert("Bilgileri doldur");

return;

}

let users = JSON.parse(
localStorage.getItem("users")
);

if(users.find(u=>u.username===username)){

alert("Kullanıcı mevcut");

return;

}

users.push({

username,
password,
balance:1000,
role:"user"

});

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert("Kayıt başarılı");

}

function login(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

let users = JSON.parse(
localStorage.getItem("users")
);

const user = users.find(

u=>

u.username===username &&
u.password===password

);

if(!user){

alert("Hatalı giriş");

return;

}

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

document.getElementById(
"balance"
).innerText = user.balance;

showPage("dashboardPage");

}

function logout(){

localStorage.removeItem(
"currentUser"
);

showPage("loginPage");

}

init();
