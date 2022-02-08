#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";
import fs from "fs";
import path from "path";

const words = fs.readFileSync(path.join(__dirname, "words.txt"), "utf-8");

Keyboard.onDown(Key.PAUSE_BREAK, async () => {
  for (const word of words.split(" ")) {
    Keyboard.tap(Key.ENTER);
    Keyboard.type(word, 0);
    await sleep(1);
    Keyboard.tap(Key.ENTER);
  }
});
