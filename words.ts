#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";
import fs from "fs";
import path from "path";

// This assumes you've created your own file called `words.txt` and put some
// stuff in it
const words = fs.readFileSync(path.join(__dirname, "words.txt"), "utf-8");

Keyboard.onDown(Key.PAUSE_BREAK, async () => {
  for (const word of words.split(" ")) {
    Keyboard.tap(Key.ENTER);
    Keyboard.type(word, 0);
    await sleep(1);
    Keyboard.tap(Key.ENTER);
  }
});

console.log(
  "Press Pause/Break to type out the contents of words.txt, one word at a time, pressing enter between each word. FFXIV party chat HATES this!"
);
