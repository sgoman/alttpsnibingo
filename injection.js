let trackerTimer = null
const bingoTiles = []

// All Bingo Cards in alttp_randomizer_generator.js, trying to implement as many as possible...
//   "Defeat Armos",
bingoTiles.push({
    content: "Defeat Armos",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x191, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Defeat Lanmolas",
bingoTiles.push({
    content: "Defeat Lanmolas",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x067, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Defeat Moldorm",
bingoTiles.push({
    content: "Defeat Moldorm",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x00F, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Defeat Agahnim",
bingoTiles.push({
    content: "Defeat Agahnim",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return data[0x3C5] >= 3
    }
})
//   "Defeat Helmasaur King",
bingoTiles.push({
    content: "Defeat Helmasaur King",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x0B5, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Defeat Arrghus",
bingoTiles.push({
    content: "Defeat Arrghus",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x00D, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Defeat Mothula",
bingoTiles.push({
    content: "Defeat Mothula",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x053, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Defeat Blind",
bingoTiles.push({
    content: "Defeat Blind",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x159, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Defeat Kholdstare",
bingoTiles.push({
    content: "Defeat Kholdstare",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x1BD, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Defeat Vitreous",
bingoTiles.push({
    content: "Defeat Vitreous",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x121, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Die to Trinexx",
//   "Desert Palace Big Chest",
//   "Tower of Hera Big Chest",
//   "Palace of Darkness Big Chest",
//   "Swamp Palace Big Chest",
//   "Skull Woods Big Chest",
//   "Thieves' Town Big Chest",
//   "Ice Palace Big Chest",
//   "Misery Mire Big Chest",
//   "Turtle Rock Big Chest",
//   "Desert Palace Compass",
//   "Tower of Hera Compass",
//   "Palace of Darkness Compass",
//   "Swamp Palace Compass",
//   "Skull Woods Compass",
//   "Thieves' Town Compass",
//   "Ice Palace Compass",
//   "Misery Mire Compass",
//   "Turtle Rock Compass",
//   "Desert Map",
//   "Hera Map",
//   "Darkness Map",
//   "Swamp Map",
//   "Skull Map",
//   "Thieves' Map",
//   "Ice Map",
//   "Mire Map",
//   "TRock Map",
//   "Open 5 Small Key Doors (Palace of Darkness)",
//   "Open 4 Small Key Doors (Skull Woods)",
//   "Open 6 Small Key Doors (Ice Palace)",
//   "Open 6 Small Key Doors (Misery Mire)",
//   "Open Purple Chest",
bingoTiles.push({
    content: "Open Purple Chest",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x3C9, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Break Ether Monolith",
bingoTiles.push({
    content: "Break Ether Monolith",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x411, 0x01]]
        return hasAll(data, locations)
    }
})
//   "Break Bombos Monolith",
bingoTiles.push({
    content: "Break Bombos Monolith",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x411, 0x02]]
        return hasAll(data, locations)
    }
})
//   "Open Misery Mire",
//   "Open Turtle Rock",
//   "Death Mountain Lonely Island",
bingoTiles.push({
    content: "Death Mountain Lonely Island",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x285, 0x40]]
        return hasAll(data, locations)
    }
})
//   "Lumberjack Tree",
bingoTiles.push({
    content: "Lumberjack Tree",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x1C5, 0x02]]
        return hasAll(data, locations)
    }
})
//   "Byrna Cave",
bingoTiles.push({
    content: "Byrna Cave",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x22E, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Mimic Cave",
bingoTiles.push({
    content: "Mimic Cave",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x218, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Lake Hylia Island",
bingoTiles.push({
    content: "Lake Hylia Island",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x2B5, 0x40]]
        return hasAll(data, locations)
    }
})
//   "Bonk Grave",
bingoTiles.push({
    content: "Bonk Grave",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x226, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Rescue the Dwarf",
bingoTiles.push({
    content: "Rescue the Dwarf",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x411, 0x04]]
        return hasAll(data, locations)
    }
})
//   "Speak to Fat Faerie",
bingoTiles.push({
    content: "Speak to Fat Faerie",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x22C, 0x10], [0x22C, 0x20]]
        return hasAll(data, locations)
    }
})
//   "Perfect Archery Game",
//   "3 Whirlpool Pairs",
//   "Spend 1000 rupees",
//   "Spend 1500 rupees",
//   "40 Arrows",
//   "50 Arrows",
//   "20 Bombs",
//   "30 Bombs",
//   "40 Arrows and 20 Bombs",
//   "8 Heart Pieces",
//   "12 Heart Pieces",
//   "4 Heart Containers",
//   "6 Heart Containers",
//   "10+ Total Hearts",
//   "12+ Total Hearts",
//   "Master Sword Pedestal",
bingoTiles.push({
    content: "Master Sword Pedestal",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x300, 0x40]]
        return hasAll(data, locations)
    }
})
//   "2 Pendants",
//   "2 Crystals",
//   "3 Crystals",
//   "2 Light World Dungeons",
//   "3 Light World Dungeons",
//   "2 Dark World Dungeons",
//   "3 Dark World Dungeons",
//   "Bomb open a cracked floor in any dungeon",
//   "Bomb open a cracked door in any dungeon",
//   "Move or destroy a wall in any dungeon",
//   "Hit Crystal Switch with Frozen Enemy",
//   "Read 3 Dark World Dungeon Telepathic Tiles",
//   "2 Dungeon Blue Rupee Rooms",
//   "Spawn a chest in 2 dungeons",
//   "Collect Sahasrahla's Prize",
bingoTiles.push({
    content: "Collect Sahasrahla's Prize",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x410, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Pull a Tounge Statue",
//   "Clear 2 Tile Rooms",
//   "Finish in a Light World Dungeon Fairy Room",
//   "Finish in a Dark Room",
//   "Finish in a Rupee Floor Room",
//   "Finish in a Trap Room",
//   "Finish in a Prison Cell",
//   "Finish in a Room with a Bumper",
//   "Finish in a Room with an Orange Warp",
//   "Finish in a Room with a Firebar",
//   "Finish in a Room with a Firesnake",
//   "Finish as a Bunny",
//   "Defeat a Deadrock",
//   "Defeat a Lynel",
//   "Defeat all 6 Freezors",
//   "Defeat a Red Eyegore and Red Mimic",
//   "Burn a Floating Stalfos Skull",
//   "Burn a Ball + Chain Trooper",
//   "Freeze a Dodongo",
//   "Freeze a Bomb Slug",
//   "Stun a Pikit",
//   "Stun a Turtle",
//   "Collect the Bow",
bingoTiles.push({
    content: "Collect the Bow",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x38E, 0xC0]]
        return hasAll(data, locations)
    }
})
//   "Collect the Lantern",
bingoTiles.push({
    content: "Collect the Lantern",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x34A, 0x01]]
        return hasAll(data, locations)
    }
})
//   "Collect the Hookshot",
bingoTiles.push({
    content: "Collect the Hookshot",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x342, 0x01]]
        return hasAll(data, locations)
    }
})
//   "Collect a Medallion",
bingoTiles.push({
    content: "Collect a Medallion",
    tileId: null,
    isOpen: true,
    check: function(data) {
        // bombos or ether or quake
        return hasAll(data, [[0x347, 0x01]]) || hasAll(data, [[0x348, 0x01]]) || hasAll(data, [[0x349, 0x01]])
    }
})
//   "Activate the Flute",
//   "Bottled Bee",
//   "Bottled Faerie",
//   "Bottled Potion",
//   "Lantern or Fire Rod",
bingoTiles.push({
    content: "Lantern or Fire Rod",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x34A, 0x01]]) || hasAll(data, [[0x345, 0x01]])
    }
})
//   "Collect Rod + Cane of the same color",
bingoTiles.push({
    content: "Collect Rod + Cane of the same color",
    tileId: null,
    isOpen: true,
    check: function(data) {
        // fire rod and cane of somaria or ice rod and cane of byrna
        return hasAll(data, [[0x345, 0x01], [0x350, 0x01]]) || hasAll(data, [[0x346, 0x01], [0x351, 0x01]])
    }
})
//   "Collect Rod + Cane of opposite colors",
bingoTiles.push({
    content: "Collect Rod + Cane of opposite colors",
    tileId: null,
    isOpen: true,
    check: function(data) {
        // fire rod and cane of byrna or ice rod and cane of somaria
        return hasAll(data, [[0x345, 0x01], [0x351, 0x01]]) || hasAll(data, [[0x346, 0x01], [0x350, 0x01]])
    }
})
//   "3 A-Items",
bingoTiles.push({
    content: "3 A-Items",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return (data[0x355] & 0x01) + (data[0x356] & 0x01) + (data[0x357] & 0x01) + data[0x354] >= 3
    }
})
//   "Upgrade Shield",
bingoTiles.push({
    content: "Upgrade Shield",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return data[0x35A] > 1
    }
})
//   "Upgrade Sword",
bingoTiles.push({
    content: "Upgrade Sword",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return data[0x359] > 1 && data[0x359] != 0xFF
    }
})
//   "Visit the Catfish with a Follower",
//   "Pay the Hamburger Helper Hand",
//   "Buy from 2 Shops in each World",
//   "4 NPC/Object Followers",
//   "Reveal a Hidden Cave under a rock in both Worlds",
//   "Complete 1 Line of Y-Items"

// Which tiles on the current board are available to autotrack?
for (const [id, task] of [...document.querySelectorAll('.text-container')].map(n => [n.parentNode.id, n.textContent])) {
    const tiles = bingoTiles.filter(t => t.content == task)
    if (tiles.length == 1) {
        tiles[0].tileId = id
        const botNode = document.createElement("div")
        botNode.innerText = '🤖'
        botNode.style.textAlign = 'right'
        botNode.style.paddingTop = '5px'
        botNode.style.opacity = 0.5
        document.querySelector(`#${id}`).appendChild(botNode)
    }
}

const socket = new WebSocket("ws://127.0.0.1:8080")
socket.binaryType = 'arraybuffer'

socket.onclose = e => {
    console.log("Connection closed!")
}

socket.onerror = e => {
    console.log("ERROR: " + JSON.stringify(e))
}

const hasAll = (data, locations) => {
    for (const [location, mask] of locations) {
        if ((data[location] & mask) === 0) return false
    }
    return true
}

const resultsAll = (data, locations) => locations.reduce((acc, [location, mask]) => [...acc, {location, mask, result: data[location] & mask}], [])

const processSave = (data, tiles) => {
    // loop over active and open bingo tiles and perform checks
    for(const tile of tiles.filter(t => t.tileId != null && t.isOpen)) {
        if (tile.check(data)) {
            console.log("Completed task " + tile.content)
            tile.isOpen = false // no need to check this tile again
            document.querySelector(`#${tile.tileId}`).click()
        }
    }
}

const trackerStartTimer = () => {
    trackerTimer = setTimeout(trackerReadMem, 1000)
}

const trackerReadMem = () => {
    const snesRead = (address, size, callback) => {
        socket.send(JSON.stringify({Opcode: "GetAddress", Space: "SNES", Operands: [address.toString(16), size.toString(16)]}))
        socket.onmessage = callback
    }

    // TODO: add reading of dungeon chests and keys

    snesRead(0xF50000 + 0x10, 1, function(event) {
        const gameMode = new Uint8Array(event.data)[0]
        if (![0x07, 0x09, 0x0b].includes(gameMode)) {
            trackerStartTimer()
            return
        }
        snesRead(0xF5F000, 0x280, function(event2) {
            snesRead(0xF5F280, 0x280, function(event3) {
                const data = new Uint8Array([...new Uint8Array(event2.data), ...new Uint8Array(event3.data)])
                processSave(data, bingoTiles)
                // TODO: save previous data
                trackerStartTimer()
            })
        })
    })
}

socket.onopen = e => {
    console.log("Connected!")
    socket.send(JSON.stringify({Opcode: "DeviceList", Space: "SNES"}))
    socket.onmessage = ev => {
        const results = JSON.parse(ev.data).Results
        if (results.length < 1) {
            console.log("No device found")
            return
        }
        socket.send(JSON.stringify({Opcode: "Attach", Space: "SNES", Operands: [results[0]]}))
        console.log("Connected to device: " + results[0])

        trackerStartTimer()
    }
}

