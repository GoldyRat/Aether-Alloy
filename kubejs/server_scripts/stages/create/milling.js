
const millingRecipes = [
    {
        output : ['2x naturesaura:gold_powder', CreateItem.of('naturesaura:gold_powder', 0.25)],
        input : 'naturesaura:gold_leaf',
        id : 'naturesaura:gold_powder'
    },
]


ServerEvents.recipes( event => {

    millingRecipes.forEach(rec => {
        event.recipes.create.milling(rec.output, rec.input).id(rec.id)
    })
})