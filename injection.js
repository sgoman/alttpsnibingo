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
bingoTiles.push({
    content: "Desert Palace Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x365, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Tower of Hera Compass",
bingoTiles.push({
    content: "Tower of Hera Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x364, 0x20]]
        return hasAll(data, locations)
    }
})
//   "Palace of Darkness Compass",
bingoTiles.push({
    content: "Palace of Darkness Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x365, 0x02]]
        return hasAll(data, locations)
    }
})
//   "Swamp Palace Compass",
bingoTiles.push({
    content: "Swamp Palace Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x365, 0x04]]
        return hasAll(data, locations)
    }
})
//   "Skull Woods Compass",
bingoTiles.push({
    content: "Skull Woods Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x364, 0x80]]
        return hasAll(data, locations)
    }
})
//   "Thieves' Town Compass",
bingoTiles.push({
    content: "Thieves' Town Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x364, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Ice Palace Compass",
bingoTiles.push({
    content: "Ice Palace Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x364, 0x40]]
        return hasAll(data, locations)
    }
})
//   "Misery Mire Compass",
bingoTiles.push({
    content: "Misery Mire Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x365, 0x01]]
        return hasAll(data, locations)
    }
})
//   "Turtle Rock Compass",
bingoTiles.push({
    content: "Turtle Rock Compass",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x364, 0x08]]
        return hasAll(data, locations)
    }
})
//   "Desert Map",
bingoTiles.push({
    content: "Desert Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x369, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Hera Map",
bingoTiles.push({
    content: "Hera Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x368, 0x20]]
        return hasAll(data, locations)
    }
})
//   "Darkness Map",
bingoTiles.push({
    content: "Darkness Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x369, 0x02]]
        return hasAll(data, locations)
    }
})
//   "Swamp Map",
bingoTiles.push({
    content: "Swamp Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x369, 0x04]]
        return hasAll(data, locations)
    }
})
//   "Skull Map",
bingoTiles.push({
    content: "Skull Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x368, 0x80]]
        return hasAll(data, locations)
    }
})
//   "Thieves' Map",
bingoTiles.push({
    content: "Thieves' Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x368, 0x10]]
        return hasAll(data, locations)
    }
})
//   "Ice Map",
bingoTiles.push({
    content: "Ice Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x368, 0x40]]
        return hasAll(data, locations)
    }
})
//   "Mire Map",
bingoTiles.push({
    content: "Mire Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x369, 0x01]]
        return hasAll(data, locations)
    }
})
//   "TRock Map",
bingoTiles.push({
    content: "TRock Map",
    tileId: null,
    isOpen: true,
    check: function(data) {
        const locations = [[0x368, 0x08]]
        return hasAll(data, locations)
    }
})
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
    content: "Pyramid Grave Robber",
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
bingoTiles.push({
    content: "20 Bombs",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return data[0x343] >= 20
    }
})
//   "30 Bombs",
bingoTiles.push({
    content: "30 Bombs",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return data[0x343] >= 30
    }
})
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

bingoTiles.push({
    content: "Upgrade Tunic",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return data[0x359] > 0
    }
})

bingoTiles.push({
    content: "Obtain the Mushroom",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x38C, 0x20]])
    }
})

bingoTiles.push({
    content: "Obtain the Powder",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x38C, 0x10]])
    }
})

bingoTiles.push({
    content: "Obtain the Shovel",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x38C, 0x04]])
    }
})

bingoTiles.push({
    content: "Obtain the Hammer",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x34B, 0x01]])
    }
})

bingoTiles.push({
    content: "Obtain the Bugnet",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x34D, 0x01]])
    }
})

bingoTiles.push({
    content: "Obtain the Book",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x34E, 0x01]])
    }
})

bingoTiles.push({
    content: "Obtain the Cape",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x352, 0x01]])
    }
})

bingoTiles.push({
    content: "Obtain the Mirror",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x353, 0x02]])
    }
})

bingoTiles.push({
    content: "The chest behind the Mario painting",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x238, 0x10]])
    }
})

bingoTiles.push({
    content: "Visit the Tavern",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x206, 0x10]])
    }
})

bingoTiles.push({
    content: "Break into the Brewery",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x20C, 0x10]])
    }
})

bingoTiles.push({
    content: "Chicken Coop secret stash",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x210, 0x10]])
    }
})

bingoTiles.push({
    content: "Mine Aginah's Cave",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x214, 0x10]])
    }
})

bingoTiles.push({
    content: "Clear Super Bunny Cave",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x1F0, 0x10],[0x1F0, 0x20]])
    }
})

bingoTiles.push({
    content: "Hype Cave Hyper Hyper!",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x23C, 0x10],[0x23C, 0x20],[0x23C, 0x40],[0x23C, 0x80],[0x23D, 0x04]])
    }
})

bingoTiles.push({
    content: "Enter Bonk Rock Cave",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x248, 0x10]])
    }
})

bingoTiles.push({
    content: "Hookshot Cave Bonk Chest",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x078, 0x80]])
    }
})

bingoTiles.push({
    content: "Hookshot Cave Full Clear",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x078, 0x10],[0x078, 0x20],[0x078, 0x40],[0x078, 0x80]])
    }
})

bingoTiles.push({
    content: "Chat with the Hobo",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x3C9, 0x01]])
    }
})

bingoTiles.push({
    content: "Wake the Catfish",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x410, 0x20]])
    }
})

bingoTiles.push({
    content: "King Zora's Extortion",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x410, 0x02]])
    }
})

bingoTiles.push({
    content: "Rescue the Old Man",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x410, 0x01]])
    }
})

bingoTiles.push({
    content: "Checkerboard Cave Prize",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x24D, 0x02]])
    }
})

bingoTiles.push({
    content: "Hammer Pegs Hammer Time!",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x24F, 0x04]])
    }
})

bingoTiles.push({
    content: "Steal from the Library",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x410, 0x80]])
    }
})

bingoTiles.push({
    content: "Bumper Cave's Caped Hero",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x2CA, 0x40]])
    }
})

bingoTiles.push({
    content: "Dig at the Flute Spot",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x2AA, 0x40]])
    }
})

bingoTiles.push({
    content: "Waterfall Fairy offerings",
    tileId: null,
    isOpen: true,
    check: function(data) {
        return hasAll(data, [[0x228, 0x10],[0x228, 0x20]])
    }
})

const evaluateAutotrackedCards = () => {
    for (const element of [...document.querySelectorAll('.autotracked')]) {
        element.parentNode.removeChild(element)
    }
    // quick hack to clear card activations
    for (let i = 1; i <= 25; i++) {
        const node = document.querySelector(`#slot${i}`)
        if (!node) continue
        node.title = ''
        for (const element of [...document.querySelectorAll(`#slot${i} .bg-color`)]) {
            element.parentNode.removeChild(element)
        }
    }
    // Which tiles on the current board are available to autotrack?
    for (const [id, task] of [...document.querySelectorAll('.text-container')].map(n => [n.parentNode.id, n.textContent])) {
        const tiles = bingoTiles.filter(t => t.content == task)
        if (tiles.length == 1) {
            tiles[0].tileId = id
            tiles[0].isOpen = true
            const botNode = document.createElement("div")
            botNode.className = 'autotracked'
            botNode.innerText = '🤖'
            botNode.style.textAlign = 'right'
            botNode.style.paddingTop = '5px'
            botNode.style.opacity = 0.5
            document.querySelector(`#${id}`).appendChild(botNode)
        }
    }
}

evaluateAutotrackedCards()

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

const addToChat = params => {
    const outerDiv = document.createElement('div')
    outerDiv.className = 'chat-entry'
    outerDiv.innerHTML = `<div><span class="chat-timestamp">${params.hour}:${params.minute}:${params.secondsAndName.split(' ')[0]}</span> <span class="chat-name">Autotracker</span>: <span class="chat-message">${params.reply}</span></div>`
    params.node.parentNode.appendChild(outerDiv)
}

const chatHandler = node => {
    // We get called for every node added to the chat pane
    // Most probably only elements with the class "chat-entry" should be considered to parse for commands
    // <div class="chat-entry"><div><span class="chat-timestamp">HH:ii:ss</span> <span class="chat-name [color]player">Name</span>: <span class="chat-message">text here</span></div></div>
    // or just the innerText: "HH:ii:ss Name: text here"
    if ([...node.classList].includes("chat-entry")) {
        const [hour, minute, secondsAndName, msg] = node.innerText.split(':') // Caution: msg only reads up to the first colon, if the original message contains any
        const words = msg.trim().split(' ')
        switch(words[0]) {
            case '!lockout': handleLockoutCommand({node, hour, minute, secondsAndName, msg, words}); break
            case '!task': handleTileTextCommand({node, hour, minute, secondsAndName, msg, words}); break
            case '!help': handleHelpCommand({node, hour, minute, secondsAndName, msg, words}); break
        }
    }
}

const handleHelpCommand = ({node, hour, minute, secondsAndName, words}) => {
    let reply = ''
    if (words.length > 1) {
        switch(words[1]) {
            case '!lockout':
            case 'lockout':
                reply += 'The lockout command restricts how many players are able to activate a bingo tile. "!lockout 2" limits all tiles to 2 players, "!lockout 1 13" limits just the tile at the very center of the board to a single player.'
                break
            case '!task':
            case 'task':
                reply += 'The task command changes the task description of tile "slot" to "message". E.g., "!task 13 Finish seed" will change the tile in the very center of the board to read "Finish seed".'
                break
            default:
                reply += `unknown command "${words[1]}". Please specify one of "lockout", "text".`
        }
    } else {
        reply += 'You can use the commands "!lockout amount [slot]", "!task slot message" or "!help [command]"'
    }
    addToChat({node, hour, minute, secondsAndName, words, reply})
}

const handleLockoutCommand = ({node, hour, minute, secondsAndName, words}) => {
    if (words.length > 2 && /^([1-9]|10)$/.test(words[1])) {
        const id = '#' + (/^([1-9]|1\d|2[0-5])$/.test(words[2]) ? 'slot' + words[2] : words[2])
        document.querySelector(id).dataset.lockout = words[1]
    } else if (words.length == 2 && /^([1-9]|10)$/.test(words[1])) {
        [...document.querySelectorAll('.blanksquare')].forEach(t => t.dataset.lockout = words[1])
    } else if (words.length == 1) {
        const reply = [...document.querySelectorAll('.blanksquare')].map(t => `${t.id} = ${t.dataset.lockout}`).join(', ')
        addToChat({node, hour, minute, secondsAndName, words, reply})
    } else {
        addToChat({node, hour, minute, secondsAndName, words, reply: 'Bogus input, nothing changed. It is advised to use just numbers from 1-10 for the first parameter and numbers 1-25 for the optional second parameter.'})
    }
}

const handleTileTextCommand = ({node, hour, minute, secondsAndName, words}) => {
    if (words.length > 2) {
        const id = '#' + (/^([1-9]|1\d|2[0-5])$/.test(words[1]) ? 'slot' + words[1] : words[1])
        const text = words.slice(2).join(' ')
        const tile = document.querySelector(id + ' .text-container')
        if (tile) {
            tile.innerText = text
            evaluateAutotrackedCards()
        } else {
            addToChat({node, hour, minute, secondsAndName, words, reply: 'Could not change unknown bingo card ' + words[1]})
        }
    } else {
        addToChat({node, hour, minute, secondsAndName, words, reply: 'You need to provide both the number of the bingo card as well as the new text for that card!'})
    }
}

const chatObserver = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
        for (const node of mutation.addedNodes) {
            chatHandler(node)
        }
    }
})

const chatNode = document.querySelector('.chat-body')
if (chatNode !== null) {
    chatObserver.observe(chatNode, {childList: true})
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const getRandomAutotrackedTasks = (num) => {
    const allTasks = bingoTiles.map(t => t.content)
    const shuffledTasks = shuffle(allTasks)
    return shuffledTasks.slice(0, num || 25)
}

const customJson = document.querySelector('#id_custom_json')
if (customJson !== null) {
    const shuffledJson = getRandomAutotrackedTasks(25)
    shuffledJson[12] = 'Finish the game'
    customJson.textContent = JSON.stringify(shuffledJson.map(name => { return {name} }))
}

const processSave = (data, tiles) => {
    // loop over active and open bingo tiles and perform checks
    for(const tile of tiles.filter(t => t.tileId != null && t.isOpen)) {
        if (tile.check(data)) {
            console.log("Completed task " + tile.content)
            tile.isOpen = false // no need to check this tile again
            const node = document.querySelector(`#${tile.tileId}`)
            if (node.title.split(' ').filter(t => t.length).length < (node.dataset.lockout || 10)) {
                node.click()
            } else {
                document.querySelector('input.chat-input').value = 'I wish I could mark "' + tile.content + '"...'
                document.querySelector('input.chat-send').click()
            }
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

