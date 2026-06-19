function showPage(pageId){

document.querySelectorAll(".page")
.forEach(page=>{

page.classList.remove("active");

});

document
.getElementById(pageId)
.classList.add("active");

}

function initializeDatabase(){

if(!localStorage.getItem("users")){

const users=[

{
id:1,
username:"admin",
password:"admin123",
role:"admin",
balance:100000
}

];

localStorage.setItem(
"users",
JSON.stringify(users)
);

}

}

function register(){

const username =
document.getElementById(
"registerUsername"
).value;

const password =
document.getElementById(
"registerPassword"
).value;

if(!username || !password){

alert("Tüm alanları doldur.");

return;

}

let users = JSON.parse(
localStorage.getItem("users")
);

const exists = users.find(
u=>u.username===username
);

if(exists){

alert("Bu kullanıcı zaten var.");

return;

}

users.push({

id:Date.now(),

username,

password,

role:"user",

balance:1000

});

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert("Kayıt başarılı.");

showPage("loginPage");

}

function login(){

const username =
document.getElementById(
"loginUsername"
).value;

const password =
document.getElementById(
"loginPassword"
).value;

let users = JSON.parse(
localStorage.getItem("users")
);

const user = users.find(

u=>

u.username===username &&
u.password===password

);

if(!user){

alert("Hatalı giriş.");

return;

}

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

document.getElementById(
"balance"
).innerText =
user.balance;

showPage("dashboardPage");

}

function logout(){

localStorage.removeItem(
"currentUser"
);

showPage("loginPage");

}

initializeDatabase();
