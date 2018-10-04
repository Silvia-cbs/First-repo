console.log('Main.js has been called')
var user1 = "Silvia";
var user2 = "Hannes";
var user3 = "Johanna";

var password1 = "Silvia123";
var password2 = "Hannes123";
var password3 = "Johanna123";



function login (){
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

if ((user == user1) && (password == password1) || (user == user2) && (password == password2) || (user == user3) && (password === password3))
{
    
alert ("You are logged in");
//return false;
}
else {alert("Wrong username or password");
}
}