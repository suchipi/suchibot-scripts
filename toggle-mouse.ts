#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldHold = false;
const button = MouseButton.RIGHT;

Keyboard.onUp(Key.SCROLL_LOCK, () => {
  shouldHold = !shouldHold;

  if (shouldHold) {
    Mouse.hold(button);
  } else {
    Mouse.release(button);
  }
});
