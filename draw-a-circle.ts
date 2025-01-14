#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key } from "suchibot";

// https://neal.fun/perfect-circle/

// Uncomment to find center
// Mouse.onMove((event) => console.log(event.x, event.y));

const count = 100;
const center = { x: 1283, y: 726 };
const magnitude = 200;

const points = new Array(count).fill(0).map((_, i) => {
  const dist = i / count;
  const angle = dist * (2 * Math.PI);
  const x = Math.cos(angle) * magnitude + center.x;
  const y = Math.sin(angle) * magnitude + center.y;
  return { x, y };
});

Keyboard.onUp(Key.PAUSE_BREAK, async () => {
  const firstPoint = points[0];
  Mouse.moveTo(firstPoint.x, firstPoint.y);
  Mouse.hold(MouseButton.LEFT);
  for (const { x, y } of points.slice(1)) {
    Mouse.moveTo(x, y);
  }
  Mouse.moveTo(firstPoint.x, firstPoint.y);
  Mouse.release(MouseButton.LEFT);
});

console.log("Press Pause/Break to draw a circle");
