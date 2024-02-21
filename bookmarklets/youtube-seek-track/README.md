```js
javascript: void (() => {
	/**
	 * More bookmarklets at
	 * https://gist.github.com/iamandrewluca/61feacf07bc4f2f50e70f986c2e9b2d2
	 * When used as a browser search engine `s` will be what user typed in address bar
	 * Post: https://dev.to/iamandrewluca/bookmarklets-browser-search-engine-2m30
	 */

	setInterval(() => {
		var video = document.querySelector("video");
		var player = video?.parentNode?.parentNode;

		if (!player || player.getPlayerState() != 1) return;

		const search = new URLSearchParams(window.location.search);
		const seekTime = player.getCurrentTime().toFixed();
		search.set("t", `${seekTime}s`);

		const newUrl = `${window.location.pathname}?${search}`;
		history.replaceState(null, "", newUrl);
	}, 5000);
})();
```
