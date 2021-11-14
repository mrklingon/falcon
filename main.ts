function setLevel (num: number) {
    if (num == 1) {
        tiles.setTilemap(tilemap`level1`)
    }
    if (num == 2) {
        tiles.setTilemap(tilemap`level2`)
    }
}
let level = 1
setLevel(level)
let Wookie = sprites.create(assets.image`Chewbacca`, SpriteKind.Player)
controller.moveSprite(Wookie)
scene.cameraFollowSprite(Wookie)
