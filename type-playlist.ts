#!/usr/bin/env suchibot
import { Mouse, MouseButton, Keyboard, Key, sleep } from "suchibot";

const songs = `
Hot Milk Snail's House Ordinary Songs 2
Lily Love GHOST DATA, Kaivaan Girl's Love
Space Girl AIKA, TOFIE Space Girl
Start Up Asseri, Tiny Waves Start Up
By The Seaside Lone Alpha, Shachimu By The Seaside
Butter Sugar Cream Tomggg, tsvaci Butter Sugar Cream
4AM Ocular 4AM
Heartbeat Jeddi Heartbeat
Mirror HoneyComeBear Mirror
Magnolia Camellia Magnolia
Camellia AIKA Camellia
Eternal Groove Android52 The B-Sides
Spica Synthion Stardust EP
Pocari Trifect Pocari
Bubble Tea - Remix Disuko, dark cat, juu, Cinders Bubble Tea (Remix)
Main Heroine cute girls doing cute things Slice of Life
Triple Sweet Tenkitsune, AIKA, Trifect Triple Sweet
Dear HoneyComeBear Dear
No Stopping Us dark cat, Jenny No Stopping Us
I Love You Android52 I Love You
Twinkle Synthion Stardust EP
Blew Moon (Uncut Edition) t+pazolite REALLY Don't waste me!
Sweet Salt Tomggg, pinoko Unbalance
Snap! cute girls doing cute things Snap!
Sakura Trip AIKA Sakura Trip
Charm Moe Shop, Puniden Charm
`
  .trim()
  .split("\n");

Keyboard.onDown(Key.PAUSE_BREAK, async () => {
  for (const song of songs) {
    Keyboard.hold(Key.LEFT_SHIFT);
    Keyboard.tap(Key.ONE);
    Keyboard.release(Key.LEFT_SHIFT);
    Keyboard.type("play " + song, 0);
    await sleep(1);
    Keyboard.tap(Key.ENTER);
  }
});
