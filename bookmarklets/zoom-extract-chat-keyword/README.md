```js
javascript: void (() => {
	let keyword = window.prompt("What is the searched keyword?").toUpperCase();
	if (!keyword) return;

	/** @type {HTMLElement[]} */
	let allChatMessages = [...document.querySelectorAll(".chat-list-item")];
	let allWithKeyWord = allChatMessages
		.filter((chatListItem) => {
			let contentWrapper = chatListItem.querySelector(".content-wrapper");
			let text = contentWrapper.textContent.toUpperCase();
			if (!text.includes(keyword)) return false;
			let onlyLettersText = text.replace(/[^A-Z]+/g, "");
			return onlyLettersText === keyword;
		})
		.map(
			(chatListItem) =>
				chatListItem.querySelector(".user-name").textContent
		);

	console.log(allWithKeyWord);

	let textarea = document.createElement("textarea");
	textarea.cols = Math.max(...allWithKeyWord.map((n) => n.length)) + 10;
	textarea.rows = allWithKeyWord.length + 10;
	textarea.readOnly = true;
	textarea.textContent = allWithKeyWord.join("\n");
	textarea.style.display = "block";

	let close = document.createElement("button");
	close.textContent = "Close";
	close.addEventListener("click", () => dialog.remove());

	let copy = document.createElement("button");
	copy.textContent = "Copy";
	copy.addEventListener("click", () =>
		navigator.clipboard.writeText(textarea.textContent)
	);

	let dialog = document.createElement("dialog");
	dialog.append(textarea, close, copy);

	document.body.append(dialog);
	dialog.showModal();
})();
```
