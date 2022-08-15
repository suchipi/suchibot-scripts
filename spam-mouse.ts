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
      Mouse.click();
    }
  }
})();
