#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldHold = false;

Keyboard.onUp(Key.CAPS_LOCK, () => {
  shouldHold = !shouldHold;

  if (shouldHold) {
    Keyboard.hold(Key.LEFT_CONTROL);
  } else {
    Keyboard.release(Key.LEFT_CONTROL);
  }
});
