javascript: (async (s) => {
	/* Was not used as search engine */
	if (s === globalThis.atob("JXM=")) s = undefined;

	/**
	 * More bookmarklets at
	 * https://gist.github.com/iamandrewluca/61feacf07bc4f2f50e70f986c2e9b2d2
	 * When used as a browser search engine `s` will be what user typed in address bar
	 * Post: https://dev.to/iamandrewluca/bookmarklets-browser-search-engine-2m30
	 */

	/* Use this to get input */
	if (!s) s = globalThis.prompt("hh:mm/hh:mm, hh:mm/hh:mm, ...");
	if (!s) return;

	// When copied from slack edited message
	s = s.replace("(edited)", "");

	let timeToDur = (t) => {
		let [h, m] = t.split(":");
		return Number(h) * 60 + Number(m);
	};

	let durToTime = (d) => {
		let h = String(Math.floor(d / 60)).padStart(2, "0");
		let m = String(d % 60).padStart(2, "0");
		return `${h}:${m}`;
	};

	let diffTime = (t1, t2) => {
		let d1 = timeToDur(t1);
		let d2 = timeToDur(t2);
		let d = d1 < d2 ? d2 - d1 : d2 + 24 * 60 - d1;
		return durToTime(d);
	};

	let split = (a, s) => {
		return a
			.split(s)
			.map((l) => l.trim())
			.filter(Boolean);
	};

	let totalTime = (entries, convert = true) => {
		let total = split(entries, ",")
			.map((l) => diffTime(...split(l, "/")))
			.map(timeToDur)
			.reduce((t1, t2) => t1 + t2);

		return convert ? durToTime(total) : total / 60;
	};

	let human = totalTime(s, true);
	let machine = totalTime(s, false).toFixed(2);

	globalThis.alert(`${human} / ${machine}`);
})(`%s`);
