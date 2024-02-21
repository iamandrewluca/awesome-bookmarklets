# awesome-bookmarklets

A list of awesome bookmarklets, just Copy and Paste as Bookmarklet

Read more about how to use bookmarklets as browser search engines:
https://dev.to/iamandrewluca/bookmarklets-browser-search-engine-2m30

## Bookmarklets

- [Request Picture in Picture](./bookmarklets/request-picture-in-picture/)
- [Extract chat keyword from Zoom recording](./bookmarklets/zoom-extract-chat-keyword/)
- [Diff Time](./bookmarklets/diff-time/)
- [YouTube Seek Track](./bookmarklets/youtube-seek-track)

### Starter template

> Converter: https://chriszarate.github.io/bookmarkleter/

```js
(async (s) => {
	/* Was not used as search engine */
	if (s === globalThis.atob("JXM=")) s = undefined;

	/**
	 * More bookmarklets at
	 * https://github.com/iamandrewluca/awesome-bookmarklets
	 * When used as a browser search engine `s` will be what user typed in address bar
	 * Post: https://dev.to/iamandrewluca/bookmarklets-browser-search-engine-2m30
	 */

	/* Use this to get input */
	if (!s) s = globalThis.prompt();

	/* Your code goes here */
	globalThis.console.log(s);
})(`%s`);
```

**TODO:**

- Migrate all bookmarklets from gist https://github.com/iamandrewluca/awesome-bookmarklets
