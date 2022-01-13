/**
 * @title Path operations
 * @difficulty beginner
 * @tags cli
 * @run <url>
 * @resource {https://deno.land/std@0.120.0/path} Doc: Deno path library
 * @resource {https://doc.deno.land/deno/stable/~/Deno.cwd} Doc: Deno current directory function
 *
 * Many applications need to delete files from disk. Deno provides a simple
 * interface for deleting files.
 */

// First well import the librery from the Deno Std
import * as path from "https://deno.land/std@0.120.0/path/mod.ts";

// If you want from url file to a os dir you can use this
const p1 = path.posix.fromFileUrl("file:///home/foo");
const p2 = path.win32.fromFileUrl("file:///home/foo");
console.log(`PATH 1: ${p1} PATH 2: ${p2}`); // PATH 1: /home/foo PATH 2: \\home\\foo

// You want get the last part of a file path you can use this
const p = path.basename("./deno/is/awesome/mod.ts");
console.log(p); // mod.ts

// You want get the directory name from a Path
const base = path.dirname("./deno/is/awesome/mod.ts");
console.log(base); // ./deno/is/awesome

// You want get the extension from a path
const ext = path.extname("./deno/is/awesome/mod.ts");
console.log(ext); // .ts

// You want format a path generating from a object
const formatPath = path.format({
  root: "/",
  dir: "/home/user/dir",
  ext: ".html",
  name: "index",
});
console.log(formatPath); // "/home/user/dir/index.html"

// You want join files with the os separator
const joinPath = path.join("foo", "bar");
console.log(joinPath); // foo/bar LINUX MACOS -- foo\\bar WINDOWS

// You want get the current directory
const current = Deno.cwd();
console.log(current); // Prints the current directory