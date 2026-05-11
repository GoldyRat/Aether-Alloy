const SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource')

const VANILLA_FLINT_AND_STEEL = 'minecraft:flint_and_steel'
const IGNISITE_AND_STEEL = 'kubejs:ignisite_and_steel'
const OBSIDIAN = 'minecraft:obsidian'
const FIRE = 'minecraft:fire'

const tellPlayer = (player, message) => {
    if (!player.level.isClientSide()) {
        player.tell(message)
    }
}

const playSound = (level, pos, sound, source, player = null) => {
    level.playSound(player, pos.x, pos.y, pos.z, sound, source, 1.0, 1.0)
}

const cancelFlintOnObsidian = (event, player) => {
    event.cancel()
    tellPlayer(
        player,
        "§cCe briquet produit une étincelle trop froide pour l'obsidienne... Il vous faut de l'Ignisite."
    )
}

const tryIgnisiteAndSteel = event => {
    const { item, block, hand, player, level, facing } = event
    const targetPos = block.pos.relative(facing)

    if (!level.isEmptyBlock(targetPos)) {
        return
    }

    playSound(level, block.pos, SoundEvents.FLINTANDSTEEL_USE, SoundSource.BLOCKS, player)
    level.setBlock(targetPos, FIRE, 3)

    item.damageValue++
    player.swing(hand)

    if (item.damageValue >= item.maxDamage) {
        item.count--
        playSound(level, block.pos, SoundEvents.ITEM_BREAK, SoundSource.PLAYERS, player)
    }

    event.cancel()
}

BlockEvents.rightClicked(event => {
    const { item, block, player } = event

    if (item.id === VANILLA_FLINT_AND_STEEL && block.id === OBSIDIAN) {
        cancelFlintOnObsidian(event, player)
        return
    }

    if (item.id === IGNISITE_AND_STEEL) {
        tryIgnisiteAndSteel(event)
    }
})