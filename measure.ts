#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

Mouse.onMove(console.log);

console.log("Move the mouse around to see info about screen coordinates");
