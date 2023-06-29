#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldHold = false;
Keyboard.onUp(Key.SCROLL_LOCK, () => {
  shouldHold = !shouldHold;

  if (shouldHold) {
    Keyboard.hold(Key.W);
  } else {
    Keyboard.release(Key.W);
  }
});
