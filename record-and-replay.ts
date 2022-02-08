#!/usr/bin/env suchibot
import { Keyboard, Key, record, Tape, isMouseEvent } from "suchibot";

let tape: Tape | null = null;

Keyboard.onUp(Key.SCROLL_LOCK, () => {
  if (tape && tape.isRecording) {
    tape.stop();
    console.log("Stopped recording");
  } else {
    if (tape) tape.stop();
    tape = record({
      eventFilter: (event) => {
        if (isMouseEvent(event)) return true;

        return !(
          event.key === Key.SCROLL_LOCK || event.key === Key.PAUSE_BREAK
        );
      },
    });
    console.log("Recording to tape...");
  }
});

Keyboard.onUp(Key.PAUSE_BREAK, async () => {
  if (!tape) return;

  console.log("Replaying tape...");
  await tape.play();
  console.log("Tape playback finished");
});

console.log("Recording system ready. Controls:");
console.log("  Scroll Lock: Start/stop recording");
console.log("  Pause/break: Replay recording");
