//Call startup methods
chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
chrome.browserAction.setBadgeText({text: "test"});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	var args = request.split("|");
        switch(args[0]){
        	case"updateBadgeText":
        		updateBadgeText(args[1]);
        	case"startMainLoop":
        		mainLoop();
        		break;
        	default:
        		sendResponse("command not requignized!");
        }
    }
);

function updateBadgeText(badgeText){
	chrome.browserAction.setBadgeText({text: badgeText});
}

//background loop
setInterval(function () {
            cnt += 1;
            document.getElementById("timer").innerHTML = cnt;
            updateBadgeText(cnt);
        }, 1000);