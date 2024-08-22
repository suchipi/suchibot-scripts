#!/usr/bin/env suchibot
import { Key } from "suchibot";
import * as Midi from "./lib/midi";

Midi.listDevices();

Midi.start(
  0,
  {
    "C  1": null,
    "C# 1": null,
    "D  1": null,
    "Eb 1": null,
    "E  1": null,
    "F  1": null,
    "F# 1": null,
    "G  1": null,
    "Ab 1": null,
    "A  1": null,
    "Bb 1": null,
    "B  1": null,

    "C  2": Key.A,
    "C# 2": Key.B,
    "D  2": Key.C,
    "Eb 2": Key.D,
    "E  2": Key.E,
    "F  2": Key.F,
    "F# 2": Key.G,
    "G  2": Key.H,
    "Ab 2": Key.I,
    "A  2": Key.J,
    "Bb 2": Key.K,
    "B  2": Key.L,

    "C  3": Key.M,
    "C# 3": Key.N,
    "D  3": Key.O,
    "Eb 3": Key.P,
    "E  3": Key.Q,
    "F  3": Key.R,
    "F# 3": Key.S,
    "G  3": Key.T,
    "Ab 3": Key.U,
    "A  3": Key.V,
    "Bb 3": Key.W,
    "B  3": Key.X,

    "C  4": Key.Y,
    "C# 4": Key.Z,
    "D  4": Key.ONE,
    "Eb 4": Key.TWO,
    "E  4": Key.THREE,
    "F  4": Key.FOUR,
    "F# 4": Key.FIVE,
    "G  4": Key.SIX,
    "Ab 4": Key.SEVEN,
    "A  4": Key.EIGHT,
    "Bb 4": Key.NINE,
    "B  4": Key.ZERO,

    "C  5": Key.MINUS,
    "C# 5": null,
    "D  5": null,
    "Eb 5": null,
    "E  5": null,
    "F  5": null,
    "F# 5": null,
    "G  5": null,
    "Ab 5": null,
    "A  5": null,
    "Bb 5": null,
    "B  5": null,

    "C  6": null,
  },
  {
    // adjust as needed until it feels right for your song
    sleepAfterMs: 3,
  }
);
