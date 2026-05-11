const recipes = [
    {
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "predicate_type": "xycraft_core:block_rule",
                "block": "minecraft:gravel"
            }
        ],
        "output": {
            "count": 1,
            "id": "minecraft:flint"
        },
        "target": {
            "block": "minecraft:magma_block",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    }
]




ServerEvents.recipes(event => {
    // Utilise event.custom au lieu de event.recipes.custom
    recipes.forEach(recipe => {
        event.custom(recipe)
    })
})