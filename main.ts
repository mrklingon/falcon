namespace SpriteKind {
    export const droid = SpriteKind.create()
    export const porg = SpriteKind.create()
}
function setLevel (num: number) {
    if (num == 1) {
        tiles.setTilemap(tilemap`level1`)
        mkPorgs()
    }
    if (num == 2) {
        delPorgs()
        tiles.setTilemap(tilemap`level2`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (0 == FirstTools) {
        bb8.sayText("These Are your tools", 1000, true)
        pause(2000)
        FirstTools = 1
        tiles.setTileAt(location, assets.tile`myTile0`)
        bb8.sayText("You've got 'em!", 1000, true)
    }
})
function delPorgs () {
    for (let value of porgsprites) {
        value.destroy()
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Wookie.setImage(assets.image`Chewbacca0`)
    Wookie.sayText("WRORRRARRRR!!", 500, false)
    music.knock.play()
    scene.cameraShake(4, 500)
    Wookie.setImage(assets.image`Chewbacca`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (0 == Fixed) {
        bb8.sayText("You have to fix the engine", 1000, true)
    } else {
        if (0 == Fuel) {
            bb8.sayText("We can't go without Fuel!!", 1000, true)
        } else {
            bb8.sayText("Now we can go!", 1000, true)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Wookie.tileKindAt(TileDirection.Bottom, assets.tile`engine`)) {
        if (0 == FirstTools) {
            bb8.sayText("You need the Tools!", 1000, true)
        } else {
            bb8.sayText("Good Work! It is fixed!", 1000, true)
            Fixed = 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (0 == Fixed) {
        bb8.sayText("You have to fix the engine", 1000, true)
    } else {
        if (0 == Fuel) {
            bb8.sayText("We can't go without Fuel!!", 1000, true)
        } else {
            bb8.sayText("Now we can go!", 1000, true)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`entry`, function (sprite, location) {
    setLevel(2)
})
function mkPorgs () {
    for (let value of porgs) {
        ps = sprites.create(value, SpriteKind.porg)
        ps.setPosition(140, 101)
        ps.follow(Wookie, 50)
        porgsprites.unshift(ps)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite, location) {
    setLevel(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`engine`, function (sprite, location) {
    if (0 == FirstEngine) {
        bb8.sayText("You need to fix this engine!", 1000, true)
        Wookie.sayText(":)", 500, false)
        FirstEngine = 1
    }
})
let ps: Sprite = null
let porgsprites: Sprite[] = []
let porgs: Image[] = []
let Fixed = 0
let bb8: Sprite = null
let Fuel = 0
let FirstTools = 0
let FirstEngine = 0
let Wookie: Sprite = null
game.splash("You need to help Chewbacca!", "The Falcon needs repair & Fuel!")
let level = 1
setLevel(level)
Wookie = sprites.create(assets.image`Chewbacca`, SpriteKind.Player)
controller.moveSprite(Wookie)
scene.cameraFollowSprite(Wookie)
FirstEngine = 0
FirstTools = 0
Fuel = 0
bb8 = sprites.create(assets.image`BB-8`, SpriteKind.droid)
bb8.setPosition(0, 0)
bb8.follow(Wookie, 70)
Fixed = 0
porgs = [assets.image`PORG`, assets.image`PORG`, assets.image`PORG`]
porgsprites = []
