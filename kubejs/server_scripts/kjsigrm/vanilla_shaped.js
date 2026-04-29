
// [KJSIGRM] Shaped recipe (2026-04-26)
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_apple', 1),
    ['AAA',
     'ABA',
     'AAA'],
    {
      A: 'minecraft:gold_ingot',
      B: 'minecraft:apple'
    }
  );
});
