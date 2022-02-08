#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep, Screen } from "suchibot";

let shouldDo = false;
Keyboard.onUp(Key.SCROLL_LOCK, () => {
  shouldDo = !shouldDo;
});

const size = Screen.getSize();
console.log(size);

(async () => {
  while (true) {
    if (shouldDo) {
      const x = Math.random() * size.width;
      const y = Math.random() * size.height;

      Mouse.moveTo(x, y);
    }

    await sleep(1);
  }
})();
