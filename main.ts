namespace SpriteKind {
    export const Attack = SpriteKind.create()
    export const Damaged_Player = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const Projectile_ = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const Snake = SpriteKind.create()
    export const human = SpriteKind.create()
    export const Any = SpriteKind.create()
    export const flying_enemy = SpriteKind.create()
    export const Snake_Enemy = SpriteKind.create()
    export const HumanLike_Enemy = SpriteKind.create()
    export const Cat_Enemy = SpriteKind.create()
}
info.onScore(125, function () {
    for (let index = 0; index < 1000; index++) {
        Cat = sprites.create(assets.image`cat`, SpriteKind.Enemy)
        Cat.setVelocity(1, 1)
        Cat.follow(Skeleton, 75)
        Cat.setPosition(73, 105)
        animation.runImageAnimation(
        Cat,
        [img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . 
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e b f b . 
            f d d f d d f d d f f d f . 
            f b d d b b d d 2 b f d f . 
            . f 2 2 2 2 2 2 d b d b f . 
            . f d d d d d d d f f f . . 
            . f d b d f f f d f . . . . 
            . . f f f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 b f f d f 
            . f 2 2 2 2 2 2 d b b d b f 
            . f d d d d d d d f f f f . 
            . . f d b d f d f . . . . . 
            . . . f f f f f f . . . . . 
            `],
        125,
        true
        )
        tiles.placeOnRandomTile(Cat, sprites.castle.tileDarkGrass2)
        pause(4312)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    animation.stopAnimation(animation.AnimationTypes.All, Skeleton)
    animation.runImageAnimation(
    Skeleton,
    assets.animation`Skeleton Damaged`,
    143,
    true
    )
    pause(500)
})
info.onScore(250, function () {
    for (let index = 0; index < 1000; index++) {
        Dinosaur = sprites.create(assets.image`Dino`, SpriteKind.Enemy)
        Dinosaur.setVelocity(1, 1)
        Dinosaur.follow(Skeleton, 25)
        Dinosaur.setPosition(73, 105)
        animation.runImageAnimation(
        Dinosaur,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 5 5 b d d d c . 
            . . . . . c d 5 5 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c b 5 5 b d d d c c . 
            . . . . c d 5 5 b b c c c . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c . 
            . c c c c c b b d d d d d d c c 
            . . . c c 5 5 b 5 5 d d d d d c 
            . . . . c b 5 5 b b c c c c c c 
            . . . . c c c c c c . . . . . . 
            . . . . . c b b b c . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c c 3 3 b b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c c 
            . . . c b c c b 5 5 b c c c . . 
            . . . c c c d 5 5 b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d c c . 
            . . c b b c c c 5 5 b c c . . . 
            . . c c c c c d 5 5 c . . . . . 
            `],
        250,
        true
        )
        tiles.placeOnRandomTile(Dinosaur, sprites.vehicle.roadVertical)
        pause(1500)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cat_Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    animation.stopAnimation(animation.AnimationTypes.All, Skeleton)
    animation.runImageAnimation(
    Skeleton,
    assets.animation`Skeleton Damaged`,
    143,
    true
    )
    pause(500)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Skeleton, controller.dy(), 100)
    controller.moveSprite(Skeleton, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b c b . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Skeleton, 50, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.flying_enemy, function (sprite, otherSprite) {
    sprites.destroy(projectile, effects.disintegrate, 500)
    sprites.destroy(Bat, effects.disintegrate, 666)
    sprites.destroyAllSpritesOfKind(SpriteKind.flying_enemy, effects.spray, 666)
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.setGameOverMessage(false, "sorry bud, you lose")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Player, function (sprite, otherSprite) {
    Skeleton.startEffect(effects.fire, 2000)
    if (true) {
        if (info.life() == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, aeroplane)
            animation.runImageAnimation(
            aeroplane,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . 3 . . . . . . . . . . . 4 . . 
                . 3 3 . . . . . . . . . 4 4 . . 
                . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                . 4 4 d d 4 d d d 4 3 d d 4 . . 
                . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                . 4 4 . . . . . . . . . . 4 4 . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . b b b . . . . . 
                . . . . b 1 1 b 1 1 1 b . . . . 
                . . b b 3 1 1 d d 1 d d b b . . 
                . b 1 1 d d b b b b b 1 1 b . . 
                . b 1 1 1 b . . . . . b d d b . 
                . . 3 d d b . . . . . b d 1 1 b 
                . b 1 d 3 . . . . . . . b 1 1 b 
                . b 1 1 b . . . . . . b b 1 d b 
                . b 1 d b . . . . . . b d 3 d b 
                . b b d d b . . . . b d d d b . 
                . b d d d d b . b b 3 d d 3 b . 
                . . b d d 3 3 b d 3 3 b b b . . 
                . . . b b b d d d d d b . . . . 
                . . . . . . b b b b b . . . . . 
                `],
            25,
            false
            )
        } else {
        	
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Cat_Enemy, function (sprite, otherSprite) {
    sprites.destroy(projectile, effects.disintegrate, 500)
    sprites.destroy(Cat, effects.disintegrate, 666)
    sprites.destroyAllSpritesOfKind(SpriteKind.Cat_Enemy, effects.disintegrate, 666)
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HumanLike_Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    animation.stopAnimation(animation.AnimationTypes.All, Skeleton)
    animation.runImageAnimation(
    Skeleton,
    assets.animation`Skeleton Damaged`,
    143,
    true
    )
    pause(500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.setGameOverMessage(false, "sorry bud, you lose")
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.boss, function (sprite) {
    game.setGameOverMessage(true, "Outstanding work, You Win!")
    game.gameOver(true)
})
scene.onHitWall(SpriteKind.boss, function (sprite, location) {
    if (aeroplane.isHittingTile(CollisionDirection.Right)) {
        tiles.setWallAt(tiles.getTileLocation(11, 1), false)
        tiles.setWallAt(tiles.getTileLocation(20, 1), false)
        tiles.setWallAt(tiles.getTileLocation(8, 4), false)
        tiles.setWallAt(tiles.getTileLocation(20, 3), false)
        tiles.setWallAt(tiles.getTileLocation(3, 8), false)
        tiles.setWallAt(tiles.getTileLocation(2, 13), false)
        tiles.setWallAt(tiles.getTileLocation(17, 10), false)
        tiles.setWallAt(tiles.getTileLocation(19, 12), false)
        tiles.setWallAt(tiles.getTileLocation(29, 9), false)
        tiles.setWallAt(tiles.getTileLocation(31, 10), false)
        tiles.setWallAt(tiles.getTileLocation(1, 18), false)
        tiles.setWallAt(tiles.getTileLocation(2, 23), false)
        tiles.setWallAt(tiles.getTileLocation(2, 24), false)
        tiles.setWallAt(tiles.getTileLocation(9, 25), false)
        tiles.setWallAt(tiles.getTileLocation(21, 29), false)
        tiles.setWallAt(tiles.getTileLocation(25, 28), false)
        tiles.setWallAt(tiles.getTileLocation(29, 22), false)
    }
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "sorry bud, you lose")
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
info.onScore(500, function () {
    effects.confetti.startScreenEffect(500)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroy(aeroplane, effects.disintegrate, 2222)
    sprites.destroy(projectile, effects.disintegrate, 333)
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flying_enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    animation.stopAnimation(animation.AnimationTypes.All, Skeleton)
    animation.runImageAnimation(
    Skeleton,
    assets.animation`Skeleton Damaged`,
    143,
    true
    )
    pause(500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Snake_Enemy, function (sprite, otherSprite) {
    pauseUntil(() => true)
    sprites.destroy(projectile, effects.disintegrate, 500)
    sprites.destroy(Snake, effects.disintegrate, 666)
    sprites.destroyAllSpritesOfKind(SpriteKind.Snake_Enemy, effects.disintegrate, 666)
    info.changeScoreBy(5)
    pause(2000)
    Snake = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Snake_Enemy)
    animation.runImageAnimation(
    Snake,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `],
    200,
    true
    )
    Snake.follow(Skeleton, 50)
    Snake.setVelocity(1, 1)
    tiles.placeOnRandomTile(Snake, sprites.castle.tileDarkGrass2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Snake_Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    animation.stopAnimation(animation.AnimationTypes.All, Skeleton)
    animation.runImageAnimation(
    Skeleton,
    assets.animation`Skeleton Damaged`,
    143,
    true
    )
    pause(500)
})
info.onScore(495, function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Human, effects.disintegrate, 666)
    sprites.destroy(projectile, effects.disintegrate, 500)
    Human = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . . 
        . . . . f f f 2 2 f f f . . . . . 
        . . . f f f 2 2 2 2 f f f . . . . 
        . . f f f e e e e e e f f f . . . 
        . . f e e 2 2 2 2 2 2 e f f . . . 
        . f f e 2 f f f f f f 2 e f f . . 
        . f f f f f e e e e f f f f f . . 
        . . f e f b f 4 4 f b f e f . . . 
        . . f e 4 1 f d d f 1 4 e f . . . 
        . . e f f f f d d d 4 e f . . . . 
        . . f d d d d f 2 2 2 f e f . . . 
        . . f b b b b f 2 2 2 f 4 e c . . 
        . . f b b b b f 5 4 4 f . c b c . 
        . . . f c c f f f f f f . . c b c 
        . . . . f f . . . f f f . . . c c 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    info.changeScoreBy(5)
    pause(1000)
    animation.runImageAnimation(
    Human,
    [img`
        ......ffff........
        ....fff22fff......
        ...fff2222fff.....
        ..fffeeeeeefff....
        ..ffe222222eef....
        ..fe2ffffff2ef....
        ..ffffeeeeffff....
        .ffefbf44fbfeff...
        .fee41fddf14eef...
        ..ffffdddddeef....
        .fddddf444eef.....
        .fbbbbf2222f4e....
        .fbbbbf2222fd4....
        ..fccf45544f44c...
        ...ffffffff..cbc..
        .....ff..ff...cbc.
        ...............cc.
        ..................
        `,img`
        ..................
        ......ffff........
        ....fff22fff......
        ...fff2222fff.....
        ..fffeeeeeefff....
        ..ffe222222eef....
        .ffe2ffffff2eff...
        .fffffeeeefffff...
        ..fefbf44fbfef....
        .ffe41fddf14ef....
        fdffe4dddd4efe....
        fbfef2222edd4e....
        fbf4f2222edde.....
        fcf.f445cbee......
        .ff.fffcbcf.......
        ....ffcbc.........
        ......cc..........
        ..................
        `,img`
        ..................
        ......ffff........
        ....fff22fff......
        ...fff2222fff.....
        ..fffeeeeeefff....
        ..fee222222eff....
        .ffe2ffffff2eff...
        .fffffeeeefffff...
        ..fefbf44fbfef....
        ..fe41fddf14ef....
        ..effffddd4ef.....
        ..fddddf222fef....
        ..fbbbbf222f4e....
        ..fbbbbf544cbc....
        ...fccfffffcbc....
        ....ff...ffcbc....
        ...........cbc....
        ............c.....
        `,img`
        ..................
        ......ffff........
        ....fff22fff......
        ...fff2222fff.....
        ..fffeeeeeefff....
        ..fee222222eff....
        .ffe2ffffff2eff...
        .fffffeeeefffff...
        ..fefbf44fbfef....
        ..fe41fddf14eff...
        ..efe4dddd4effdf..
        ..e4dde2222fefbf..
        ...eddec222f4fbf..
        ....eecbc44f.fcf..
        .....ffcbcff.ff...
        ........cbcf......
        .........cc.......
        ..................
        `],
    250,
    true
    )
    Human.setVelocity(1, 1)
    Human.follow(Skeleton, 50)
    Snake = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Snake_Enemy)
    Snake.follow(Skeleton, 50)
    Snake.setVelocity(1, 1)
    tiles.placeOnRandomTile(Human, sprites.castle.tileDarkGrass1)
    tiles.placeOnRandomTile(Snake, sprites.castle.tileDarkGrass2)
    pause(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    animation.stopAnimation(animation.AnimationTypes.All, Skeleton)
    animation.runImageAnimation(
    Skeleton,
    assets.animation`Skeleton Damaged`,
    143,
    true
    )
    pause(500)
})
let Snake: Sprite = null
let aeroplane: Sprite = null
let Bat: Sprite = null
let projectile: Sprite = null
let Dinosaur: Sprite = null
let Cat: Sprite = null
let Human: Sprite = null
let Skeleton: Sprite = null
scene.setBackgroundImage(assets.image`Welcome to Site Arrowhead`)
game.splash("Welcome to Site Arrowhead", "")
game.showLongText("Press WASD to move Press Z or space to shoot arrows, survive against waves of enemies in a deserted grassland until you get to 500 score, and be aware, there just might be a boss at 495 score, you will need atleast 2 lives to survive.", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`Deserted Grasslands`)
Skeleton = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
animation.runImageAnimation(
Skeleton,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
143,
true
)
info.setLife(3)
Skeleton.setStayInScreen(true)
Skeleton.setVelocity(100, 100)
Human = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . . 
    . . . . f f f 2 2 f f f . . . . . 
    . . . f f f 2 2 2 2 f f f . . . . 
    . . f f f e e e e e e f f f . . . 
    . . f e e 2 2 2 2 2 2 e f f . . . 
    . f f e 2 f f f f f f 2 e f f . . 
    . f f f f f e e e e f f f f f . . 
    . . f e f b f 4 4 f b f e f . . . 
    . . f e 4 1 f d d f 1 4 e f . . . 
    . . e f f f f d d d 4 e f . . . . 
    . . f d d d d f 2 2 2 f e f . . . 
    . . f b b b b f 2 2 2 f 4 e c . . 
    . . f b b b b f 5 4 4 f . c b c . 
    . . . f c c f f f f f f . . c b c 
    . . . . f f . . . f f f . . . c c 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(Skeleton, assets.tile`Grass`)
animation.runImageAnimation(
Human,
[img`
    ......ffff........
    ....fff22fff......
    ...fff2222fff.....
    ..fffeeeeeefff....
    ..ffe222222eef....
    ..fe2ffffff2ef....
    ..ffffeeeeffff....
    .ffefbf44fbfeff...
    .fee41fddf14eef...
    ..ffffdddddeef....
    .fddddf444eef.....
    .fbbbbf2222f4e....
    .fbbbbf2222fd4....
    ..fccf45544f44c...
    ...ffffffff..cbc..
    .....ff..ff...cbc.
    ...............cc.
    ..................
    `,img`
    ..................
    ......ffff........
    ....fff22fff......
    ...fff2222fff.....
    ..fffeeeeeefff....
    ..ffe222222eef....
    .ffe2ffffff2eff...
    .fffffeeeefffff...
    ..fefbf44fbfef....
    .ffe41fddf14ef....
    fdffe4dddd4efe....
    fbfef2222edd4e....
    fbf4f2222edde.....
    fcf.f445cbee......
    .ff.fffcbcf.......
    ....ffcbc.........
    ......cc..........
    ..................
    `,img`
    ..................
    ......ffff........
    ....fff22fff......
    ...fff2222fff.....
    ..fffeeeeeefff....
    ..fee222222eff....
    .ffe2ffffff2eff...
    .fffffeeeefffff...
    ..fefbf44fbfef....
    ..fe41fddf14ef....
    ..effffddd4ef.....
    ..fddddf222fef....
    ..fbbbbf222f4e....
    ..fbbbbf544cbc....
    ...fccfffffcbc....
    ....ff...ffcbc....
    ...........cbc....
    ............c.....
    `,img`
    ..................
    ......ffff........
    ....fff22fff......
    ...fff2222fff.....
    ..fffeeeeeefff....
    ..fee222222eff....
    .ffe2ffffff2eff...
    .fffffeeeefffff...
    ..fefbf44fbfef....
    ..fe41fddf14eff...
    ..efe4dddd4effdf..
    ..e4dde2222fefbf..
    ...eddec222f4fbf..
    ....eecbc44f.fcf..
    .....ffcbcff.ff...
    ........cbcf......
    .........cc.......
    ..................
    `],
250,
true
)
Human.setVelocity(1, 1)
tiles.placeOnRandomTile(Skeleton, sprites.castle.tileDarkGrass3)
music.play(music.createSong(assets.song`Arrowhead mania`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    Human.follow(Skeleton, 50)
    scene.cameraFollowSprite(Skeleton)
    if (info.score() >= 500) {
        game.setGameOverMessage(true, "Outstanding work, You Win!")
        game.gameOver(true)
    }
    if (info.score() >= 495) {
        scene.cameraShake(3, 5000)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 500)
        info.startCountdown(randint(6, 10))
        pause(2000)
        aeroplane = sprites.create(img`
            ....ffffff.........ccc..
            ....ff22ccf.......cc4f..
            .....ffccccfff...cc44f..
            ....cc24442222cccc442f..
            ...c9b4422222222cc422f..
            ..c999b2222222222222fc..
            .c2b99111b222222222c22c.
            c222b111992222ccccccc22f
            f222222222222c222ccfffff
            .f222222222244222ff.....
            ..ff2222222cf442222f....
            ....ffffffffff442222c...
            .........f2cfffc2222c...
            .........fcc2ffffffff...
            ..........fc2ffff.......
            ...........fffff........
            `, SpriteKind.boss)
        aeroplane.startEffect(effects.fire, 10000)
        aeroplane.follow(Skeleton, 250)
        aeroplane.setPosition(-3, 117)
        animation.runImageAnimation(
        aeroplane,
        assets.animation`Aeroplane`,
        250,
        true
        )
        pause(5000)
    }
    if (info.score() >= 125) {
        for (let index = 0; index < 1000; index++) {
            Cat = sprites.create(assets.image`cat`, SpriteKind.Enemy)
            Cat.setVelocity(1, 1)
            Cat.follow(Skeleton, 75)
            animation.runImageAnimation(
            Cat,
            [img`
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 f . f d f 
                . f 2 2 2 2 2 2 b b f f d f 
                . f b d d d d d d b b d b f 
                . f d d d d d b d d f f f . 
                . f d f f f d f f d f . . . 
                . f f . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e b f b . 
                f d d f d d f d d f f d f . 
                f b d d b b d d 2 b f d f . 
                . f 2 2 2 2 2 2 d b d b f . 
                . f d d d d d d d f f f . . 
                . f d b d f f f d f . . . . 
                . . f f f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 b f f d f 
                . f 2 2 2 2 2 2 d b b d b f 
                . f d d d d d d d f f f f . 
                . . f d b d f d f . . . . . 
                . . . f f f f f f . . . . . 
                `],
            125,
            true
            )
            tiles.placeOnRandomTile(Cat, sprites.castle.tileDarkGrass2)
            pause(12000)
        }
    }
    if (info.score() >= 45) {
        for (let index = 0; index < 1000; index++) {
            Bat = sprites.create(assets.image`bat`, SpriteKind.flying_enemy)
            Bat.setVelocity(1, 1)
            Bat.follow(Skeleton, 49)
            animation.runImageAnimation(
            Bat,
            assets.animation`bat`,
            125,
            true
            )
            tiles.placeOnRandomTile(Bat, assets.tile`Grass`)
            pause(8000)
        }
    }
})
