// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
    // Le silex stylé
    event.create('ignisite').displayName('Ignisite')

    // Le briquet spécial (type 'tools' pour la durabilité)
    // Le briquet avec les propriétés de "Flint and Steel"
    event.create('ignisite_and_steel')
        .displayName('Ignisite and Steel')
        .maxDamage(64)
        // On définit que c'est un briquet pour le jeu
        .tag('minecraft:creeper_igniters')
})

StartupEvents.registry('block', event => {
    // Un bloc d'Ignisite pour la déco
    event.create('ignisite_block')
        .displayName('Ignisite Block')
        .hardness(3.0)
        .resistance(5.0)
})