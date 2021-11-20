```js
javascript: void (function () {
	/** @type {NodeListOf<HTMLIFrameElement>} */
	const iFrames = window.document.querySelectorAll("iframe");

	console.log(`Found ${iFrames.length} iframes`);

	/** @type {Document[]} */
	const allDocuments = [
		window.document,
		...Array.from(iFrames)
			.map((i) => i.contentDocument)
			/**
			 * some iFrames have `null` contentDocument
			 * one reason for this is because of not Same-Origin policy
			 */
			.filter(Boolean),
	];

	console.log(`Found ${allDocuments.length} documents`);

	/** @type {HTMLVideoElement[]} */
	const allVideos = allDocuments.flatMap((d) =>
		Array.from(d.querySelectorAll("video"))
	);

	console.log(`Found ${allVideos.length} videos`);

	/** @type {HTMLVideoElement} */
	const playingVideo = allVideos.find((v) => !v.paused);

	if (playingVideo) {
		console.log(`Found playing video`);
		playingVideo.requestPictureInPicture();
	}
})();
```
