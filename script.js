const user1 = "noreen@gmail.com";
const user2 = "abc@gmail.com";
const password1 = "noreen";
const password2 = "abc";
var userEmail;
let showEmailSpan;
let invalidEmailMsg;
let login;
let userName;
let showName;
let user;
let isPass=false;

function checkEmail(){

	userEmail = document.querySelector('input').value;

	let isEmailExist = (userEmail == user1) || (userEmail == user2);

	if(isEmailExist == true){
		if(userEmail == user1){
			user = "noreen";
		}else{
			user = "abc";
		}

		localStorage.setItem("userEmail", userEmail);
		sessionStorage.setItem("user", user);
		let loginEmail = document.querySelector("#login");
		loginEmail.innerHTML = window.open('confirm-password.html');
		loginEmail.innerHTML = window.close('index.html');
	}else{
		document.getElementById('invalid-email').style.display = "block";
		document.getElementById('email').style.bordercolor = "red";
	}
	
}


function checkPassword(){
	isPass=true;
	sessionStorage.setItem("pass", isPass);
	let userPassword = document.querySelector('input').value;

	if(userEmail == "abc@gmail.com" && userPassword == "abc" ){
		openWindow();

	}else if(userEmail == "noreen@gmail.com" && userPassword == "noreen" ){
		openWindow();
	
	}else{
		alert("incorrect password");
		document.getElementById('invalid-msg').style.display = "block";
	}
	
}
function openWindow(){
	login = document.querySelector("#password");
	login.innerHTML = window.open('welcome.html');
	login.innerHTML = window.close('confirm-password.html');
	
}

if(sessionStorage.getItem("pass") == "true"){
	userName = sessionStorage.getItem("user");
	showName= document.getElementById('welcome-name');
	window.onload = (showName.innerHTML = userName);
	

}else{

	userEmail = localStorage.getItem("userEmail");//to use variable from one webpage to another
	showEmailSpan = document.getElementById('email');
	window.onload= (showEmailSpan.innerHTML = userEmail);
}




