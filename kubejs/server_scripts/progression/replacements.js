function applyRecipeReplacements(event, replacements, removeOutputs = []) {
    removeOutputs.forEach(output => event.remove({ output }))

    replacements.forEach(([from, to, options = {}]) => {
        const { replaceInput = true, replaceOutput = true } = options

        if (replaceInput) {
            event.replaceInput({}, from, to)
        }

        if (replaceOutput) {
            event.replaceOutput({}, from, to)
        }
    })
}

ServerEvents.recipes(event => {
    const replacements = [
        ['modern_industrialization:coke', 'immersiveengineering:coal_coke'],
        ['modern_industrialization:coke_dust', 'immersiveengineering:dust_coke'],
        ['modern_industrialization:coke_block', 'immersiveengineering:coke'],
        ['modern_industrialization:coke_oven', 'immersiveengineering:cokebrick', { replaceOutput: false }]
    ]

    const removeOutputs = ['modern_industrialization:coke_oven']

    applyRecipeReplacements(event, replacements, removeOutputs)
})