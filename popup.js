// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	browser.extension.getBackgroundPage().browser.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
browser.runtime.onMessage.addListener(function (message) {
	document.getElementById('userinfo').innerHTML = message;
});