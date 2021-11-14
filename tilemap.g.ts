// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400140001010103030301030107070701010101010301050103030101010101010606060101010101010101010101010101010102060606020101010102010101010101010101020206060602010101020201010101010101010102020606060202010102020104010101010101020202060606020201010202010401010101010202020202020202020201020201010101010401020202020202020202020202020101010101010102020202020202020202020201010101010401020202020202020202020202020101010101010102020202020202020202020202010301010101010202020202020202020202020201010101010101020202020202020202020202020101010301010102020202020202020202020202010101010101010202020202020202020202020201010101010101020202020202020202020202020101010101010101020202020202020202020201010103010103010101020202020202020202010101010305010101010101020202020202020101010101010501010101010101010101010101010101010105`, img`
....................
....................
........2...2....2..
.......22...2...22..
.......22...22..22..
......222...22..22..
.....2222222222.22..
.....2........2222..
.....2..........2...
....2...........2...
....2...........2...
....2...........2...
....2...........2...
....2...........2...
....2...........2...
....22.........22...
.....2........22....
......22.....22.....
.......2222222......
....................
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile5,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.builtin.forestTiles4,sprites.castle.tilePath5,sprites.castle.tilePath2], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`14001400010101030303010301070707010101010103010501030301010101010106060601010101010101010101010101010101020606060201010108090101010101010101010202060606020101010202010101010101010101020206060602020101020201040101010101010202020606060202010102020104010101010102020202020202020202010202010101010104010202020202020202020202020a0101010101010102020202020202020202020201010101010401020202020202020202020202020101010101010102020202020202020202020202010301010101010202020202020202020202020201010101010101020202020202020202020202020101010301010102020202020202020202020202010101010101010202020202020202020202020201010101010101020202020202020202020202020101010101010101020202020202020202020201010103010103010101020202020202020202010101010305010101010101020202020202020101010101010501010101010101010101010101010101010105`, img`
....................
...............2222.
........2...2..2..2.
.......22...2..2..2.
.......22...22.2..2.
......222...22.2..2.
.....22.....2222..2.
.....2............2.
.....2..........222.
....2...........2...
....2...........2...
....2...........2...
....2...........2...
....2...........2...
....2...........2...
....22.........22...
.....2........22....
......22.....22.....
.......2222222......
....................
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile5,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.builtin.forestTiles4,sprites.castle.tilePath5,sprites.castle.tilePath2,myTiles.tile6,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile8":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
