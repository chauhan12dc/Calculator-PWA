var firstNumber = null;
var secondNumber = null;
var operation = "";
var unreadCount = 0;
window.onload = () => {
	'use strict';

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./serviceWorker.js');
	}

	// Set the badge
navigator.setAppBadge(unreadCount).catch((error) => {
  //Do something with the error.
  console.log("error");
});
}

function displayNotification(){
	Notification.requestPermission(status =>{
		console.log('Notification ',status);
	});

	if(Notification.permission === 'granted'){
		navigator.serviceWorker.getRegistration()
		.then(reg =>{
			unreadCount++;
			navigator.setAppBadge(unreadCount).catch((error) => {
  //Do something with the error.
  console.log("error");
});
			reg.showNotification('Hello world',options);
		});
	};
}
document.addEventListener('keydown', function(event) {
   btnClick(event.key);
},true);

function btnClick(clicked_id){

	if (clicked_id == "1" || clicked_id == "2" || clicked_id == "3" || clicked_id == "4" || clicked_id == "5" || clicked_id == "6" || clicked_id == "7" || clicked_id == "8" || clicked_id == "9" || clicked_id == "0")
	{
		if (operation == "") {
			document.getElementById("display2").innerHTML += clicked_id;
		}
		else{
			document.getElementById("display2").innerHTML += clicked_id;
		}		
	}
	else if(clicked_id == "-" || clicked_id == "+" || clicked_id == "*" || clicked_id == "/")
	{
			
		firstNumber = document.getElementById("display2").innerHTML;
		if (firstNumber=="") {alert("Invalid selection")}
		else{
			document.getElementById("display1").innerHTML = firstNumber + " "+ clicked_id;
			document.getElementById("display2").innerHTML = null;
			operation = clicked_id;
		}
	}
	else if(clicked_id == "=" || clicked_id == "Enter")
	{
		secondNumber = document.getElementById("display2").innerHTML;

		switch(operation){
			case "+":
				document.getElementById("display1").innerHTML += " " + secondNumber + " = " + (parseInt(firstNumber)+ parseInt(secondNumber));
				document.getElementById("display2").innerHTML = null;
				break;
			
			case "-":
				document.getElementById("display1").innerHTML += " " + secondNumber + " = " + (parseInt(firstNumber) - parseInt(secondNumber));
				document.getElementById("display2").innerHTML = null;
				break;

			case "/":
			document.getElementById("display1").innerHTML += " " + secondNumber + " = " + (parseInt(firstNumber) / parseInt(secondNumber));
			document.getElementById("display2").innerHTML = null;
			break;
			
			case "*":
				document.getElementById("display1").innerHTML += " " + secondNumber + " = " + (parseInt(firstNumber) * parseInt(secondNumber));
				document.getElementById("display2").innerHTML = null;
				break;
		}
	}
	else if(clicked_id == "AC")
	{
		document.getElementById("display1").innerHTML = null;
		document.getElementById("display2").innerHTML = null;
		firstNumber = null;
		secondNumber = null;
		operation = null;
	}
	else if(clicked_id == "Back" || clicked_id == "Backspace"){

		var str = document.getElementById("display2").innerHTML;

		document.getElementById("display2").innerHTML = str.substring(0,str.length - 1);

	}
	
}

function operationToPerform(){
	alert(firstNumber);
}


const options = {
	body :'Body',
	icon:'images/hello-icon-512.png',
	vibrate:[100,50,100],
	badge: 'https://vanarragon.ca/nimage/icon.png',
	data:{primaryKey:1},
	actions:[
	{action:'go',title:'go to site'},
	{action:'close',title:'Close website'}]
}

