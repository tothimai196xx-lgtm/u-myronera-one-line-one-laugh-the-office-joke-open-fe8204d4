import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: a concrete image (the office fridge), setup first,
// punchline in the very last words. Avoids Monday / printer / water-cooler
// cliches. Must stay within 1-200 characters.
const joke =
  "The office fridge now has a sign-up sheet, a padlock, and a security camera, because someone keeps eating my labeled lunch and leaving a sticky note that says 'teamwork makes the dream work.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
