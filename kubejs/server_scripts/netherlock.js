ServerEvents.recipes(event => {
    // Craft de ton briquet spécial
    event.shapeless('kubejs:ignisite_and_steel', [
        'kubejs:ignisite',
        '#c:ingots/iron'
    ])

    event.shaped('kubejs:ignisite_block', [
        'II',
        'II'
    ], {
        I: 'kubejs:ignisite'
    })
})

const SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource')

BlockEvents.rightClicked('minecraft:obsidian', event => {
    const { item, player, level } = event

    // 1. On bloque le briquet VANILLE sur l'obsidienne
    if (item.id === 'minecraft:flint_and_steel') {
        event.cancel() 
        if (!level.isClientSide()) {
            player.tell("§cCe briquet produit une étincelle trop froide pour l'obsidienne... Il vous faut de l'Ignisite.")
        }
    }
    
    // Note : Ton 'ignisite_and_steel' fonctionnera normalement car 
    // par défaut, un briquet allume du feu, et le feu sur l'obsidienne 
    // crée le portail. On n'a donc rien besoin d'ajouter pour le tien !
})

// Permettre à l'Ignisite and Steel d'allumer du feu partout
BlockEvents.rightClicked(event => {
    const { item, block, hand, player, level } = event

    if (item.id == 'kubejs:ignisite_and_steel') {
        // On cible la face du bloc cliquée
        let targetPos = block.pos.relative(event.facing)
        
        if (level.isEmptyBlock(targetPos)) {
            // Jouer le son du briquet
            level.playSound(player, block.pos.x, block.pos.y, block.pos.z, SoundEvents.FLINTANDSTEEL_USE, SoundSource.BLOCKS, 1.0, 1.0)
            
            // Placer le feu
            level.setBlock(targetPos, 'minecraft:fire', 3)
            
            // Consommer 1 de durabilité
            item.damageValue++
            
            // Animer la main du joueur
            player.swing(hand)
            
            // Si l'item est cassé
            if (item.damageValue >= item.maxDamage) {
                item.count--
                level.playSound(player, block.pos.x, block.pos.y, block.pos.z, SoundEvents.ITEM_BREAK, SoundSource.PLAYERS, 1.0, 1.0)
            }

            // Annuler l'événement pour éviter tout comportement par défaut
            event.cancel()
        }
    }
})