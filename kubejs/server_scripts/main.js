// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


ServerEvents.recipes(event => {
    

    event.remove({ output: 'modern_industrialization:coke_oven' })

    event.recipes.create.milling(
        ['2x naturesaura:gold_powder', CreateItem.of('naturesaura:gold_powder', 0.25)], 
        'naturesaura:gold_leaf'
    ).id('naturesaura:gold_powder')

    event.recipes.naturesaura.altar('create:polished_rose_quartz', 'create:rose_quartz')
    .id('create:sandpaper_polishing/rose_quartz')

    event.recipes.create.mixing(
        '3x modern_industrialization:bronze_dust',
        ['3x immersiveengineering:dust_copper', 'modern_industrialization:tin_dust']
    )
    .id('modern_industrialization:materials/bronze_dust')
    .superheated()

    const cokeMapping = [
        ['modern_industrialization:coke', 'immersiveengineering:coal_coke'],
        ['modern_industrialization:coke_dust', 'immersiveengineering:dust_coke'],
        ['modern_industrialization:coke_block', 'immersiveengineering:coke']
    ]

    cokeMapping.forEach(([oldItem, newItem]) => {
        // 1. Remplace l'item dans toutes les recettes où il est nécessaire (Input)
        event.replaceInput({}, oldItem, newItem)
        
        // 2. Remplace l'item dans toutes les recettes où il est produit (Output)
        event.replaceOutput({}, oldItem, newItem)
    })

    event.replaceInput(
        {},
        'modern_industrialization:coke_oven',
        'immersiveengineering:cokebrick'
    )

    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "predicate_type": "xycraft_core:fluid_tag_rule",
                "tag": "minecraft:lava" // Utilise "block" au lieu de "tag" si tu cibles un bloc précis
            }
        ],
        "output": {
            "count": 1,
            "id": 'kubejs:ignisite'
        },
        "target": {
            "block": 'kubejs:ignisite_block',
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 180
    }).id('kubejs:flint_from_magma_extractor')
})
