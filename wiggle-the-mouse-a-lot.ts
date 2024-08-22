#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep, Screen } from "suchibot";

let shouldWiggle = false;
Keyboard.onUp(Key.SCROLL_LOCK, () => {
  shouldWiggle = !shouldWiggle;
});

const size = Screen.getSize();
console.log(size);

(async () => {
  while (true) {
    if (shouldWiggle) {
      const x = Math.random() * size.width;
      const y = Math.random() * size.height;

      Mouse.moveTo(x, y);
    }

    await sleep(1);
  }
})();

console.log(
  "Press Scroll Lock to toggle waving the mouse around randomly all over the place"
);
