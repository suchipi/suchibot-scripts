#!/usr/bin/env suchibot
import { Keyboard, Key } from "suchibot";

const keys: Array<Key> = [
  Key.A,
  Key.B,
  Key.C,
  Key.D,
  Key.E,
  Key.F,
  Key.G,
  Key.H,
  Key.I,
  Key.J,
  Key.K,
  Key.L,
  Key.M,
  Key.N,
  Key.O,
  Key.P,
  Key.Q,
  Key.R,
  Key.S,
  Key.T,
  Key.U,
  Key.V,
  Key.W,
  Key.X,
  Key.Y,
  Key.Z,
  Key.ONE,
  Key.TWO,
  Key.THREE,
  Key.FOUR,
  Key.FIVE,
  Key.SIX,
  Key.SEVEN,
  Key.EIGHT,
  Key.NINE,
  Key.ZERO,
];

Keyboard.onDown(Key.UP, () => {
  for (const key of keys) {
    Keyboard.hold(key);
  }
});

Keyboard.onUp(Key.UP, () => {
  for (const key of keys) {
    Keyboard.release(key);
  }
});

console.log(
  "Press 'up arrow' to press every alphanumeric key at once.\n...Why did I make this?"
);
