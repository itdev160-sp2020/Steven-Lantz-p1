/*Project 1 */

//Initial greeting on page
var user ='privacy companion';
var salutation = 'How\'s it going ';
var greeting = salutation + user + '?' +' Thanks for checking out this site!';
var greetingEl = document.getElementById("greeting");
greetingEl.textContent = greeting + timeOfDay();

function timeOfDay(){
    var hours = new Date().hours;

    if(hours > 12){
        alert("Good Afternoon!");
    }
    else{
        alert("Good Morning!");
    }
}

//Function to fill table
//First level of pricing for service
function tierOne(){
var price = "$4/month";
var priceEl = document.getElementById("price");
priceEl.textContent = price;

var country = "3 Countries"
var countryEl = document.getElementById("countries");
countryEl.textContent = country;

var devicesEl = document.getElementById("devices");
devicesEl.textContent = "1 Device";

var speedEl = document.getElementById("speed");
speedEl.textContent = "Medium";

var plusServersEl = document.getElementById("plus-servers");
plusServersEl.textContent = "N/A";

var torServersEl = document.getElementById("tor-servers");
torServersEl.textContent = "N/A";

var secureStreamingEl = document.getElementById("secure-streaming");
secureStreamingEl.textContent = "N/A";

var currentEl = document.getElementById("current");
currentEl.textContent = "Tier One Features";
}

//Function to fill table
//Second level of pricing for service
function tierTwo() {
    var price = "$4/month";
    var priceEl = document.getElementById("price");
    priceEl.textContent = price;

    var country = "All Countries"
    var countryEl = document.getElementById("countries");
    countryEl.textContent = country;

    var devicesEl = document.getElementById("devices");
    devicesEl.textContent = "2 Devices";

    var speedEl = document.getElementById("speed");
    speedEl.textContent = "High";

    var plusServersEl = document.getElementById("plus-servers");
    plusServersEl.textContent = "N/A";

    var torServersEl = document.getElementById("tor-servers");
    torServersEl.textContent = "N/A";

    var secureStreamingEl = document.getElementById("secure-streaming");
    secureStreamingEl.textContent = "N/A";

    var currentEl = document.getElementById("current");
    currentEl.textContent = "Tier Two Features";

}

//Function to fill table
//Third level of pricing for service
function tierThree() {
    var price = "$8/month";
    var priceEl = document.getElementById("price");
    priceEl.textContent = price;

    var country = "All Countries"
    var countryEl = document.getElementById("countries");
    countryEl.textContent = country;

    var devicesEl = document.getElementById("devices");
    devicesEl.textContent = "5 Devices";

    var speedEl = document.getElementById("speed");
    speedEl.textContent = "High";

    var plusServersEl = document.getElementById("plus-servers");
    plusServersEl.textContent = "Yes";

    var torServersEl = document.getElementById("tor-servers");
    torServersEl.textContent = "Yes";

    var secureStreamingEl = document.getElementById("secure-streaming");
    secureStreamingEl.textContent = "Yes";

    var currentEl = document.getElementById("current");
    currentEl.textContent = "Tier Three Features";

    
}

//Function to fill table
//Fourth level of pricing
function tierFour() {
    var price = "$24/month";
    var priceEl = document.getElementById("price");
    priceEl.textContent = price;

    var country = "All Countries"
    var countryEl = document.getElementById("countries");
    countryEl.textContent = country;

    var devicesEl = document.getElementById("devices");
    devicesEl.textContent = "10 Devices";

    var speedEl = document.getElementById("speed");
    speedEl.textContent = "High";

    var plusServersEl = document.getElementById("plus-servers");
    plusServersEl.textContent = "Yes";

    var torServersEl = document.getElementById("tor-servers");
    torServersEl.textContent = "Yes";

    var secureStreamingEl = document.getElementById("secure-streaming");
    secureStreamingEl.textContent = "Yes";

    var currentEl = document.getElementById("current");
    currentEl.textContent = "Tier Four Features";
}