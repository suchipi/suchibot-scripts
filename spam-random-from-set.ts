#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldHold = false;
Keyboard.onUp(Key.PAUSE_BREAK, () => {
  shouldHold = !shouldHold;
});

const keysToPickFrom = [Key.U, Key.J, Key.B, Key.N];
const maxDelayBetweenPresses = 100;

function pick<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

(async () => {
  while (true) {
    await sleep(Math.floor(Math.random() * maxDelayBetweenPresses));
    if (shouldHold) {
      Keyboard.tap(pick(keysToPickFrom));
    }
  }
})();

console.log("Press Pause/Break to toggle randomly spamming U, J, B, and N");
