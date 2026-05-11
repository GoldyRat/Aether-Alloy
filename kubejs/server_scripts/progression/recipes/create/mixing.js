const mixingRecipes = [
    {
        output: '3x modern_industrialization:bronze_dust',
        input: ['3x immersiveengineering:dust_copper', 'modern_industrialization:tin_dust'],
        id: 'modern_industrialization:materials/bronze_dust',
        superheated: true
    }
]

ServerEvents.recipes(event => {
    mixingRecipes.forEach(rec => {
        let recipe = event.recipes.create.mixing(rec.output, rec.input).id(rec.id)
        if (rec.superheated) {
            recipe.superheated()
        }
    })
})