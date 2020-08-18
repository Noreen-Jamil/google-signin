
let userEmailInput;
const users = [
	{
		user: "xyz@gmail.com",
		password: "xyz",
		userName : "Mr.Xyz"
	},
	{
		user: "abc@gmail.com",
		password : "abc",
		userName : "Mr. Abc "
	},
	{
		user: "noreen@gmail.com",
		password : "noreen",
		userName : "Noreen Jamil"
	}
];
let isEmailExist;


function checkEmail(){

	userEmailInput = document.querySelector('input').value;

	console.log(`email ${userEmailInput}`);
	
	users.find( (user,index) => {
		
		if(user.user == userEmailInput){ 
			isEmailExist = true;
			userDetail = {
				userEmail: user.user,
				userName: user.userName,
				userPassword:user.password,
				nextPage : "password"
			};
			localStorage.setItem("user", JSON.stringify(userDetail));
			
		}
	});
	if(isEmailExist == true){
		window.location.href = "confirm-password.html";
	}else{
		document.getElementById('invalid-email').style.display = "block";
		document.getElementById('email').style.border = "2px solid red";
	}
	
	console.log(`is email Exist ${isEmailExist}`);

}

let userDetail = JSON.parse(localStorage.getItem("user"));

function checkPassword(){
	
	let userPassword = document.querySelector('input').value;
	
	console.log(userDetail);
	if(userDetail.userPassword  == userPassword){
		window.location.href = "welcome.html";
		userDetail.nextPage = "welcome";
		localStorage.setItem("user", JSON.stringify(userDetail));

	}else{
		document.getElementById('invalid-msg').style.display = "block";
		document.querySelector('input').style.borderColor = "red";
	}
	
}


console.log(userDetail.nextPage);



 if(userDetail.nextPage == "password" || userDetail.nextPage == "backToPassword"){

	userEmail = userDetail.userEmail;
	showEmailSpan = document.getElementById('email');
	window.onload= (showEmailSpan.innerHTML = userEmail);
}
else if(userDetail.nextPage == "welcome"){
	userName = userDetail.userName;
	showName= document.getElementById('welcome-name');
	window.onload = (showName.innerHTML = userName);
	userDetail.nextPage = "backToPassword";
	localStorage.setItem("user", JSON.stringify(userDetail));
}



