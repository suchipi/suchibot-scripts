#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldSpamLeft = false;
let shouldSpamRight = false;

Keyboard.onUp(Key.SCROLL_LOCK, () => {
  shouldSpamLeft = !shouldSpamLeft;
});

Keyboard.onUp(Key.PAUSE_BREAK, () => {
  shouldSpamRight = !shouldSpamRight;
});

(async () => {
  while (true) {
    await sleep(1);
    if (shouldSpamLeft) {
      Mouse.click(MouseButton.LEFT);
    }
    if (shouldSpamRight) {
      Mouse.click(MouseButton.RIGHT);
    }
  }
})();

console.log("Scroll lock: toggle spamming left");
console.log("Pause/break: toggle spamming right");
