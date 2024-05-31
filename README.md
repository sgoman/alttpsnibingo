Autotracker for ALTTP BingoSync Races
=====================================

This will help you keep track of your bingo card for races in A Link To The Past on [Bingosync](https://bingosync.com/), eventually.

Right now it only contains a test page to experiment with SNI connections and a tiny selection of very basic checks.

Later on I plan to build a user content script for the [GreaseMonkey](https://github.com/greasemonkey/greasemonkey)/[TamperMonkey](https://www.tampermonkey.net/) browser extension that integrates with bingosync.com and provides autotracking for most of the possible bingo tiles for ALTTP.
Some goals might not be possible or at least trivial to track, so some user interaction might still be required.

Injecting code into bingosync.com
---------------------------------

To inject the autotracker code, put the contents of injection.js into the clip board (open the file, CTRL-a, CTRL-c).

If you optionally want a fully automated bingo game, follow these steps as the room creator:

- select the option "Custom (Advanced)" from the Game selection dropdown
- open the web developer tools of your browser (most probably by pressing F12, otherwise check the context menus)
- make sure the "Console" tab is selected in the developer tools
- paste (CTRL-v) the contents of injection.js into the prompt at the bottom of the page and hit enter
- check the "Board" textbox on the bingosync page, it should contain a list of randomly selected tasks the autotracker is able to perform
- fill the other dialog option of the form as usual and hit the "Make Room" button

After a player has joined a bingosync room, they have to perform the same three steps from the optional instructions above:

- open the web developer tools of your browser (most probably by pressing F12, otherwise check the context menus)
- make sure the "Console" tab is selected in the developer tools
- paste (CTRL-v) the contents of injection.js (that you previously copied to the clip board, see the top of this section) into the prompt at the bottom of the page and hit enter

If everything worked well, the console should display a message that a device was connected and each tile on the bingo card that can be auto tracked should display a little robot emoji to the upper right.

Those last three steps have to be performed by each player who wants their bingo tasks to be auto tracked, in their own browser tabs.

It is advised to do those steps as the last chores of your setup routine for the ALTTP Randomizer Game. That is: the SNI connector should be up and running, the randomized ROM loaded on your SNES, maybe you have also started some other item or map tracking service. 

Executing commands via the bingosync room chat
----------------------------------------------

Once a player has injected the tracker code on a room page, the player chat is enhanced by some additional commands. Those commands are sent to every other player in the room and if they have the script injected as well, their clients will perform the action as well. So it is advised to only use those commands after every player has connected and injected the code, as well as before the game is officially started.

- "!task <slot number> <task text>" will change the text displayed on a bingo tile. E.g., "!task 13 Finish the game" will change the center tile of the bingo board to read "Finish the game". This will also re-evaluate the auto-tracking capabilities of each tile. If you enter a task description that matches an auto-tracked bingo card, the tracker will pick that up and act accordingly. Currently, there is a caveat regarding the activation of bingo tiles that were changed with this command: the chat will still display the original task description instead of the one currently being displayed on the board.
- "!lockout [number of players allowed] [slot number to apply this restriction]" can restrict the number of players that are allowed to mark a bingo task as completed. If you just issue a "!lockout" command without any additional parameters, the current settings for each tile will be displayed. If you only provide the number of players allowed, it will update all bingo tiles to allow a maximum of that number of players. For example, "!lockout 2" will set all tasks to allow only two players to be able to mark them. If you also provide the number of a tile, the restriction will only be applied to that single tile. So "!lockout 1 13" will restrict the center tile to only allow the activation by the first player to reach that goal. Keep in mind that those lockout limits will only apply to marks performed by the autotracker, marking a tile manually by clicking on a square will still be possible. This is a technical limitation caused by the usage of anonymous event handlers bound to each bingo square. It would be cool if bingosync provides that functionality itself.
- "!help [command]" will display some help text. Just "!help" by itself will print some general info, "!help task" or "!help !task" will provide more insight about the task command. Note: there is no detailed description for "!help help" ;)

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
