const altarRecipes = [
    {
        output: 'create:polished_rose_quartz',
        input: 'create:rose_quartz',
        id: 'create:sandpaper_polishing/rose_quartz'
    }
]

ServerEvents.recipes(event => {
    altarRecipes.forEach(rec => {
        event.recipes.naturesaura.altar(rec.output, rec.input).id(rec.id)
    })
})