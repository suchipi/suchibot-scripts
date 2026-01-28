#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

let shouldHold = false;
const button = MouseButton.LEFT;

Keyboard.onUp(Key.PAUSE_BREAK, () => {
  shouldHold = !shouldHold;

  if (shouldHold) {
    Mouse.hold(button);
  } else {
    Mouse.release(button);
  }
});

console.log(`Press Pause/Break to toggle holding down ${button}-click`);
