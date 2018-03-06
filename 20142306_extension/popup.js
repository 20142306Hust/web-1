chrome.webNavigation.onHistoryStateUpdated.addListener(function() {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){
        var web = "www.facebook.com"
       	if(localStorage.count === "NaN" || localStorage.count === "undefined"){
			localStorage.setItem("count", 0);
					
		}
				

		// set time
		if(localStorage.time === "NaN" || localStorage.time === "undefined"){
			localStorage.setItem("time", 1);
			alert(localStorage.time)
		}
		// set boolean add time
		if(localStorage.boo === "NaN" || localStorage.boo === "undefined"){
			localStorage.setItem("boo", 0);

		}
		// set time start when connect facebook
		if(localStorage.start === "NaN" || localStorage.start === "undefined"){
			localStorage.setItem("start", 0);
		}

		if(localStorage.maxtime === "NaN" || localStorage.maxtimeo === "undefined"){
			localStorage.setItem("maxtime", 10000000000000);

		}
		// if connect fb
        if(tabs[0].url.indexOf(web) !== -1){
        	// alert(123)
        	localStorage.count = Number(localStorage.count) +1 ;
           	var t = Number(new Date())/1000;
			// localStorage.setItem("start", t);
			chrome.tabs.onRemoved.addListener(function(tabid, removed) {
				
				alert("tab closed")
			})
			
		}
			

		} 
	
		
    
    );
    if(Number(localStorage.maxtime) < Number(localStorage.time)){
			alert("Bạn đã dành quá nhiều thời gian cho Facebook!");
			
		}

});


//Khi ấn nút xem.. có id "popup" thì gọi hàm....
document.getElementById("popup").addEventListener("click", showCheckFB);

function showCheckFB() {
	// alert(localStorage.count);
	document.getElementById("myCheckFB").innerHTML = localStorage.count;
}

document.getElementById("timming").addEventListener("click", showTime);

function showTime() {  
	// alert(localStorage.time);
	document.getElementById("myTimeCheckFB").innerHTML = localStorage.time;
}

document.getElementById("max").addEventListener("click", showMax);
function showMax() {  
	// alert(localStorage.maxtime);
	document.getElementById("myLimitTime").innerHTML = localStorage.maxtime;

}
document.getElementById("refresh").addEventListener("click", refresh);
function refresh() {  
	document.getElementById("myTimeCheckFB").innerHTML = localStorage.time;
	document.getElementById("myLimitTime").innerHTML = localStorage.maxtime;
	document.getElementById("myCheckFB").innerHTML = localStorage.count;
}
document.getElementById("clear").addEventListener("click", clear);
function clear() {  
	localStorage.setItem("time", 0);
	localStorage.setItem("maxtime", 0);
	localStorage.setItem("count", 0);
	refresh()
}
document.getElementById("Submit").addEventListener("click", setTime);

function setTime(){
	var x = document.getElementsByName("settime")[0].value;
	if(Number(x) > 0){
		localStorage.setItem("maxtime", x);
		document.getElementById("myLimitTime").innerHTML = x;
		alert("Bạn đã thay đổi thời gian sử dụng FB")
	}
	else{
		alert("Thời gian nhập vào không đúng!")
	}
}

