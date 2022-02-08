#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldHold = false;
Keyboard.onUp(Key.SCROLL_LOCK, () => {
  shouldHold = !shouldHold;

  if (shouldHold) {
    Mouse.hold();
  } else {
    Mouse.release();
  }
});
