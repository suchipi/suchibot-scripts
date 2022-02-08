#!/usr/bin/env suchibot
import { Keyboard, Key, record, Tape, isMouseEvent, sleep } from "suchibot";

(async () => {
  await sleep(500);
  Keyboard.hold(Key.F10);
})();
