/* Timer-JS
*
* Time Zones in the world.
* Simply version
*
* Technology: JS / CSS
*
* Author: grz
*/

// Time zones

	// Local Time
var localTime = new Date();
var localTimeTemp = localTime.toLocaleTimeString();

	// London Time
var londonH = localTime.getHours() - 1;
var londonM = localTime.getMinutes();
var londonS = localTime.getSeconds();

	// Paris Time
var parisH = localTime.getHours() - 1;
var parisM = localTime.getMinutes();
var parisS = localTime.getSeconds();

	// Moscow Time
var moscowH = localTime.getHours() + 3;
var moscowM = localTime.getMinutes();
var moscowS = localTime.getSeconds();

	// Pekin Time
var pekinH = localTime.getHours() + 7;
var pekinM = localTime.getMinutes();
var pekinS = localTime.getSeconds();

	// Tokio Time
var tokioH = localTime.getHours() + 8;
var tokioM = localTime.getMinutes();
var tokioS = localTime.getSeconds();

	// Sydney time
var sydneyH = localTime.getHours() + 10;
var sydneyM = localTime.getMinutes();
var sydneyS = localTime.getSeconds();

	// Los Angeles time
var losangelesH = localTime.getHours() + 15;
var losangelesM = localTime.getMinutes();
var losangelesS = localTime.getSeconds();

	// New York time
var newyorkH = localTime.getHours() + 18;
var newyorkM = localTime.getMinutes();
var newyorkS = localTime.getSeconds();

// console.log(londonH + ":" + londonM + ":" + londonS);