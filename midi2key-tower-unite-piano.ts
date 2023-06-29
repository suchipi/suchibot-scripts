#!/usr/bin/env suchibot
import { Key } from "suchibot";
import * as Midi from "./lib/midi";

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
  "F  2": Key.Q,
  "F# 2": [Key.LEFT_SHIFT, Key.Q],
  "G  2": Key.W,
  "Ab 2": [Key.LEFT_SHIFT, Key.W],
  "A  2": Key.E,
  "Bb 2": [Key.LEFT_SHIFT, Key.E],
  "B  2": Key.R,

  "C  3": Key.T,
  "C# 3": [Key.LEFT_SHIFT, Key.T],
  "D  3": Key.Y,
  "Eb 3": [Key.LEFT_SHIFT, Key.Y],
  "E  3": Key.U,
  "F  3": Key.I,
  "F# 3": [Key.LEFT_SHIFT, Key.I],
  "G  3": Key.O,
  "Ab 3": [Key.LEFT_SHIFT, Key.O],
  "A  3": Key.P,
  "Bb 3": [Key.LEFT_SHIFT, Key.P],
  "B  3": Key.A,

  "C  4": Key.S,
  "C# 4": [Key.LEFT_SHIFT, Key.S],
  "D  4": Key.D,
  "Eb 4": [Key.LEFT_SHIFT, Key.D],
  "E  4": Key.F,
  "F  4": Key.G,
  "F# 4": [Key.LEFT_SHIFT, Key.G],
  "G  4": Key.H,
  "Ab 4": [Key.LEFT_SHIFT, Key.H],
  "A  4": Key.J,
  "Bb 4": [Key.LEFT_SHIFT, Key.J],
  "B  4": Key.K,

  "C  5": Key.L,
  "C# 5": [Key.LEFT_SHIFT, Key.L],
  "D  5": Key.Z,
  "Eb 5": [Key.LEFT_SHIFT, Key.Z],
  "E  5": Key.X,
  "F  5": Key.C,
  "F# 5": [Key.LEFT_SHIFT, Key.C],
  "G  5": Key.V,
  "Ab 5": [Key.LEFT_SHIFT, Key.V],
  "A  5": Key.B,
  "Bb 5": [Key.LEFT_SHIFT, Key.B],
  "B  5": Key.N,

  "C  6": Key.M,
});
