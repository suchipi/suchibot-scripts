#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

// Mouse.onDown(MouseButton.ANY, (event) => {
//   console.log("down", event.button);
// });

// Mouse.onUp(MouseButton.ANY, (event) => {
//   console.log("upw", event.button);
// });

Mouse.onDown(MouseButton.MOUSE4, () => {
  Keyboard.hold(Key.SPACE);
});

Mouse.onUp(MouseButton.MOUSE4, () => {
  Keyboard.release(Key.SPACE);
});

Mouse.onDown(MouseButton.MOUSE5, () => {
  Keyboard.hold(Key.W);
});

Mouse.onUp(MouseButton.MOUSE5, () => {
  Keyboard.release(Key.W);
});
