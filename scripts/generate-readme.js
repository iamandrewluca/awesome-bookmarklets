import fs from "fs/promises";
import path from "path";

const bookmarksPath = "bookmarklets";
const bookmarks = await fs.readdir(bookmarksPath);

for (const name of bookmarks) {
	const bookmarkPath = path.resolve(bookmarksPath, name, "source.js");
	const bookmarkContent = (await fs.readFile(bookmarkPath, "utf-8")).trim();
	const readmePath = path.resolve(bookmarksPath, name, "README.md");
	const readmeContent = ["```js", bookmarkContent, "```", ""].join("\n");
	fs.writeFile(readmePath, readmeContent);
}
