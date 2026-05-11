const recipeList = [
    {
        type: 'shapeless',
        output: 'kubejs:ignisite_and_steel',
        input: ['kubejs:ignisite', '#c:ingots/iron']
    },
    {
        type: 'shaped',
        output: 'kubejs:ignisite_block',
        pattern: ['II', 'II'],
        key: {
            I: 'kubejs:ignisite'
        }
    }
]

ServerEvents.recipes(event => {
    recipeList.forEach(recipe => {
        if (recipe.type === 'shapeless') {
            event.shapeless(recipe.output, recipe.input)
        } else if (recipe.type === 'shaped') {
            event.shaped(recipe.output, recipe.pattern, recipe.key)
        }
    })
})