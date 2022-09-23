#!/usr/bin/env suchibot
import { Key } from "suchibot";
import * as Midi from "./lib/midi";

const Notes = Midi.Notes;

Midi.listDevices();

Midi.start(1, {
  "C  1": Key.ONE,
  "C# 1": [Key.LEFT_SHIFT, Key.ONE],
  "D  1": Key.TWO,
  "Eb 1": [Key.LEFT_SHIFT, Key.TWO],
  "E  1": Key.THREE,
  "F  1": Key.FOUR,
  "F# 1": [Key.LEFT_SHIFT, Key.FOUR],
  "G  1": Key.FIVE,
  "Ab 1": [Key.LEFT_SHIFT, Key.FIVE],
  "A  1": Key.SIX,
  "Bb 1": [Key.LEFT_SHIFT, Key.SIX],
  "B  1": Key.SEVEN,

  "C  2": Key.EIGHT,
  "C# 2": [Key.LEFT_SHIFT, Key.EIGHT],
  "D  2": Key.NINE,
  "Eb 2": [Key.LEFT_SHIFT, Key.NINE],
  "E  2": Key.ZERO,
  "F  2": Key.MINUS,

  // Back
  "F# 2": [Key.LEFT_SHIFT, Key.MINUS],

  "G  2": Key.EQUAL,
  "Ab 2": [Key.LEFT_SHIFT, Key.EQUAL],
  "A  2": Key.M,
  "Bb 2": Key.ESCAPE,
  "B  2": null,

  // Movement
  "C  3": Key.A,
  "C# 3": Key.W,
  "D  3": Key.S,
  "Eb 3": Key.R,
  "E  3": Key.D,

  // Jump
  "F  3": Key.SPACE,

  // Confirm
  "F# 3": Key.NUMPAD_0,

  // D-pad (targeting)
  "G  3": Key.NUMPAD_4,
  "Ab 3": Key.NUMPAD_8,
  "A  3": Key.NUMPAD_2,
  "Bb 3": Key.NUMPAD_8,
  "B  3": Key.NUMPAD_6,

  // Camera
  "C  4": Key.LEFT,
  "C# 4": Key.UP,
  "D  4": Key.DOWN,
  "Eb 4": Key.UP,
  "E  4": Key.RIGHT,

  // Selection
  "F  4": Key.NUMPAD_0,
  "F# 4": Key.ESCAPE,
  "G  4": Key.NUMPAD_4,
  "Ab 4": Key.NUMPAD_8,
  "A  4": Key.NUMPAD_2,
  "Bb 4": Key.NUMPAD_8,
  "B  4": Key.NUMPAD_6,

  "C  5": Key.LEFT_CONTROL,
  "C# 5": null,
  "D  5": Key.LEFT_ALT,
  "Eb 5": null,
  "E  5": Key.LEFT_SHIFT,
  "F  5": null,
  "F# 5": null,
  "G  5": null,
  "Ab 5": null,
  "A  5": null,
  "Bb 5": null,
  "B  5": null,

  "C  6": Key.RIGHT_BRACKET,
});
