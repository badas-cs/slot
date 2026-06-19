function showPage(pageId){

document.querySelectorAll(".page")
.forEach(page => {

page.classList.remove("active");

});

document
.getElementById(pageId)
.classList.add("active");

}

function initializeDatabase(){

if(!localStorage.getItem("users")){

const users = [

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

initializeDatabase();
