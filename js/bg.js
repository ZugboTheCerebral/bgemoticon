chrome.runtime.onMessage.addListener(function (message, sender, callback) {
	if (message.type === "set") {
		chrome.storage.local.set({
            "emoticons": message.data
        });
	}
	if (message.type === "get") {
		chrome.storage.local.get({"emoticons": []}, 
    		function(options) {
        		callback(options.emoticons);
        	}
        );
        return true;
	}
});