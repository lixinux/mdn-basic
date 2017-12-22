var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/razorback.jpg') {
		myImage.setAttribute('src', 'images/razorback1.jpg');
	} else {
		myImage.setAttribute('src', 'images/razorback.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')

function setUserName() {
	var myName = prompt("Please enter your name.");
	localStorage.setItem('name', myName);
	myHeading.textContent = "Turtle is cool, ", myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "Turtle is cool, " + storedName;
}

myButton.onclick = function() {
	setUserName();
}