ServerEvents.recipes(event => {
    event.remove({ output: 'modern_industrialization:coke_oven' })

    const cokeMapping = [
        ['modern_industrialization:coke', 'immersiveengineering:coal_coke'],
        ['modern_industrialization:coke_dust', 'immersiveengineering:dust_coke'],
        ['modern_industrialization:coke_block', 'immersiveengineering:coke']
    ]

    cokeMapping.forEach(([oldItem, newItem]) => {
        event.replaceInput({}, oldItem, newItem)
        event.replaceOutput({}, oldItem, newItem)
    })

    event.replaceInput(
        {},
        'modern_industrialization:coke_oven',
        'immersiveengineering:cokebrick'
    )
})