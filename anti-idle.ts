#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

const DELAY = 5 * 60 * 1000;

(async () => {
  while (true) {
    Keyboard.tap(Key.A);
    await sleep(DELAY);
    Keyboard.tap(Key.D);
    await sleep(DELAY);
  }
})();
