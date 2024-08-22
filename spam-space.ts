#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldHold = false;
Keyboard.onUp(Key.PAUSE_BREAK, () => {
  shouldHold = !shouldHold;
});

(async () => {
  while (true) {
    await sleep(1);
    if (shouldHold) {
      Keyboard.tap(Key.SPACE);
    }
  }
})();

console.log("Press Pause/Break to toggle spamming spacebar really fast");
