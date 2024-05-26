Autotracker for ALTTP BingoSync Races
=====================================

This will help you keep track of your bingo card for races in A Link To The Past on [Bingosync](https://bingosync.com/), eventually.

Right now it only contains a test page to experiment with SNI connections and a tiny selection of very basic checks.

Later on I plan to build a user content script for the [GreaseMonkey](https://github.com/greasemonkey/greasemonkey)/[TamperMonkey](https://www.tampermonkey.net/) browser extension that integrates with bingosync.com and provides autotracking for most of the possible bingo tiles for ALTTP.
Some goals might not be possible or at least trivial to track, so some user interaction might still be required.


Getting started (with the test script)
--------------------------------------

- start SNI
- load a game of ALTTP on a compatible device
- (optionally) launch [Dunka Tracker](https://alttprtracker.dunka.net/index.html) and make sure you have enabled Autotracking, just to make sure other applications are able to connect to your game
- drag and drop test.html on a browser tab. The log should show messages that it connected to a device. If it does not, something went wrong.
- play the game! The first "virtual bingo cards" are about the items in Link's house, the two checks in the secret passage into Hyrule Castle and Sanctuary. There might be additional checks like obtaining the fire rod, but the first three should be easy to accomplish quickly for testing purposes.


Aknowledgements
---------------

The current implementation is heavily based on [autot.js from the Dunka Autotracker](https://github.com/bigdunka/alttptracker/blob/master/js/autot.js)

To use this code, you need to have [SNI](https://github.com/alttpo/sni/releases) running and use a compatible emulator or hardware adaptor if you are using the original SNES console. For more information on how to set up your environment, see the [A Link To The Past Randomizer Setup Guide](https://archipelago.gg/tutorial/A%20Link%20to%20the%20Past/multiworld/en) provided by the Archipelago multiworld randomizer community.

**Notice**: According to the SNI release page linked above, the listener on port 8080 might be deprecated starting with release v0.0.96. As this script relies on the port 8080, please make sure you use an older version of the SNI software.
