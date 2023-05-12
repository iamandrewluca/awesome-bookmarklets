# awesome-bookmarklets

A list of awesome bookmarklets, just Copy and Paste as Bookmarklet

## Bookmarklets

- [Request Picture in Picture](./bookmarklets/request-picture-in-picture/)
- [Extract chat keyword from Zoom recording](./bookmarklets/zoom-extract-chat-keyword/)
- [Diff Time](./bookmarklets/diff-time/)

### Starter template

> Converter: https://chriszarate.github.io/bookmarkleter/

```js
(async (s) => {	
	// Was not used as search engine
	if (s === globalThis.atob("JXM=")) s = undefined;

	/**
	 * More bookmarklets at
	 * https://gist.github.com/iamandrewluca/61feacf07bc4f2f50e70f986c2e9b2d2
	 * When used as a browser search engine `s` will be what user typed in address bar
	 * Post: https://dev.to/iamandrewluca/bookmarklets-browser-search-engine-2m30
	 */

	// Use this to get input
	// if (!s) s = globalThis.prompt();

	/* Your code goes here */
	globalThis.console.log(s);
})(`%s`);
```

**TODO:**

- Migrate all bookmarklets from gist https://gist.github.com/iamandrewluca/61feacf07bc4f2f50e70f986c2e9b2d2
