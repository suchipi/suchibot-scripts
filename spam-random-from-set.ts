#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldHold = false;
Keyboard.onUp(Key.PAUSE_BREAK, () => {
  shouldHold = !shouldHold;
});

const keys = [Key.U, Key.J, Key.B, Key.N];

function pick<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

(async () => {
  while (true) {
    await sleep(Math.floor(Math.random() * 100));
    if (shouldHold) {
      Keyboard.tap(pick(keys));
    }
  }
})();
