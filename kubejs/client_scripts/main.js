// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

RecipeViewerEvents.removeEntries('item', event => {
    // On cache le Coke Oven de MI pour ne laisser que celui d'IE
    event.remove('modern_industrialization:coke_oven')
    event.remove('modern_industrialization:coke')
})