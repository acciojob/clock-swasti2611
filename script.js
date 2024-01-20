//your JS code here. If required.
let time=document.getElementById("timer");

setInterval(function() 
			{
				let date=new Date();
				time.innerHTML =date.toLocaleString();
			}, 1000);