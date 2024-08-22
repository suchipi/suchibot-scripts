#!/usr/bin/env suchibot
import { Keyboard, Key, Tape, keyboardEventFilter } from "suchibot";

const tape = new Tape([
  keyboardEventFilter({ key: Key.SCROLL_LOCK }),
  keyboardEventFilter({ key: Key.PAUSE_BREAK }),
]);

Keyboard.onUp(Key.SCROLL_LOCK, () => {
  if (tape.state === Tape.State.RECORDING) {
    tape.stopRecording();
    console.log("Stopped recording");
  } else {
    if (tape.state === Tape.State.PLAYING) {
      console.log("Stopped playing");
      tape.stopPlaying();
    }
    tape.record();
    console.log("Recording to tape...");
  }
});

Keyboard.onUp(Key.PAUSE_BREAK, async () => {
  console.log("Replaying tape...");
  await tape.play();
  console.log("Tape playback finished");
});

console.log("Recording system ready. Controls:");
console.log("  Scroll Lock: Start/stop recording");
console.log("  Pause/break: Replay recording");
