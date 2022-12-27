//Modify Tags
onEvent('item.tags', event => {
  /* Copper */
  event.remove('forge:ores/copper', ['tconstruct:copper_ore', 'thermal:copper_ore', 'mekanism:copper_ore'])
  event.remove('forge:ingots/copper', ['tconstruct:copper_ingot', 'thermal:copper_ingot', 'mekanism:ingot_copper'])
  event.remove('forge:nuggets/copper', ['mekanism:nugget_copper', 'thermal:copper_nugget', 'tconstruct:copper_nugget'])
  event.remove('forge:dusts/copper', ['mekanism:dust_copper'])
  event.remove('forge:plates/copper', ['thermal:copper_plate'])
  event.remove('forge:storage_blocks/copper', ['tconstruct:copper_block', 'thermal:copper_block', 'mekanism:block_copper'])
  /* Silver */
  event.remove('forge:ores/silver', ['pixelmon:silver_ore'])
  event.remove('forge:ingots/silver', ['pixelmon:silver_ingot'])
  /* Tin */
  event.remove('forge:ores/tin', ['thermal:tin_ore'])
  event.remove('forge:ingots/tin', ['mekanism:ingot_tin'])
  event.remove('forge:nuggets/tin', ['mekanism:nugget_tin'])
  event.remove('forge:dusts/tin', ['mekanism:dust_tin'])
  event.remove('forge:storage_blocks/tin', ['thermal:tin_block'])
  /* Lead */
  event.remove('forge:ores/lead', ['thermal:lead_ore'])
  event.remove('forge:ingots/lead', ['mekanism:ingot_lead'])
  event.remove('forge:nuggets/lead', ['mekanism:nugget_lead'])
  event.remove('forge:dusts/lead', ['mekanism:dust_lead'])
  event.remove('forge:storage_blocks/lead', ['mekanism:block_lead'])
})

onEvent('block.tags', event => {
  /* Copper */
  event.remove('forge:ores/copper', ['tconstruct:copper_ore', 'thermal:copper_ore', 'mekanism:copper_ore'])
  event.remove('forge:storage_blocks/copper', ['tconstruct:copper_block', 'thermal:copper_block', 'mekanism:block_copper'])
  /* Silver */
  event.remove('forge:ores/silver', ['pixelmon:silver_ore'])
  /* Tin */
  event.remove('forge:ores/tin', ['thermal:tin_ore'])
  event.remove('forge:storage_blocks/tin', ['thermal:tin_block'])
  /* Lead */
  event.remove('forge:ores/lead', ['thermal:lead_ore'])
  event.remove('forge:storage_blocks/lead', ['mekanism:block_lead'])
})

//Modify Crafts
onEvent('recipes', event => {
  /* Copper */
  event.remove({ id: 'tconstruct:common/materials/copper_ingot_blasting' })
  event.remove({ id: 'tconstruct:common/materials/copper_ingot_smelting' })
  event.remove({ id: 'tconstruct:common/materials/copper_ingot_from_block' })
  event.remove({ id: 'tconstruct:common/materials/copper_ingot_from_nuggets' })
  event.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })
  event.remove({ id: 'tconstruct:common/materials/copper_block_from_ingots' })

  event.remove({ id: 'thermal:smelting/copper_ingot_from_ore_blasting' })
  event.remove({ id: 'thermal:smelting/copper_ingot_from_ore_smelting' })
  event.remove({ id: 'thermal:storage/copper_ingot_from_block' })
  event.remove({ id: 'thermal:storage/copper_ingot_from_nuggets' })
  event.remove({ id: 'thermal:storage/copper_nugget_from_ingot' })
  event.remove({ id: 'thermal:storage/copper_block' })

  event.remove({ id: 'mekanism:processing/copper/ingot/from_nuggets' })
  event.remove({ id: 'mekanism:processing/copper/ingot/from_block' })
  event.remove({ id: 'mekanism:processing/copper/ingot/from_ore_blasting' })
  event.remove({ id: 'mekanism:processing/copper/ingot/from_ore_smelting' })
  event.remove({ id: 'mekanism:processing/copper/nugget/from_ingot' })
  event.remove({ id: 'mekanism:processing/copper/storage_blocks/from_ingots' })

  unifyBlocksCutter(['tconstruct:copper_block', 'thermal:copper_block', 'mekanism:block_copper', 'create:copper_block'])
  /* Silver */
  event.remove({ id: 'pixelmon:blast_furnace/silver_ore' })
  event.remove({ id: 'pixelmon:furnace/silver_ore' })
  event.remove({ id: 'pixelmon:equipment/silver/silver_from_block' })
  event.remove({ id: 'pixelmon:equipment/silver/silver_block' })
  event.remove({ id: 'pixelmon:equipment/silver/silver_helmet' })
  event.remove({ id: 'pixelmon:equipment/silver/silver_chestplate' })
  event.remove({ id: 'pixelmon:equipment/silver/silver_leggings' })
  event.remove({ id: 'pixelmon:equipment/silver/silver_boots' })

  unifyBlocksCutter(['pixelmon:silver_block', 'thermal:silver_block'])
  /* Tin */
  event.remove({ id: 'mekanism:processing/tin/ingot/from_nuggets' })
  event.remove({ id: 'mekanism:processing/tin/ingot/from_ore_blasting' })
  event.remove({ id: 'mekanism:processing/tin/ingot/from_ore_smelting' })
  event.remove({ id: 'mekanism:processing/tin/ingot/from_dust_blasting' })
  event.remove({ id: 'mekanism:processing/tin/ingot/from_dust_smelting' })
  event.remove({ id: 'mekanism:processing/tin/nugget/from_ingot' })

  event.remove({ id: 'create:blasting/ingot_tin_compat_mekanism' })
  event.remove({ id: 'create:smelting/ingot_tin_compat_mekanism' })
  event.remove({ id: 'create:splashing/mekanism/crushed_tin_ore' })

  event.remove({ id: 'thermal:storage/tin_block' })
  event.remove({ id: 'thermal:storage/tin_ingot_from_block' })

  unifyBlocksCutter(['thermal:tin_block', 'mekanism:block_tin'])
  /* Lead */
  event.remove({ id: 'mekanism:processing/lead/ingot/from_block' })
  event.remove({ id: 'mekanism:processing/lead/ingot/from_nuggets' })
  event.remove({ id: 'mekanism:processing/lead/ingot/from_ore_blasting' })
  event.remove({ id: 'mekanism:processing/lead/ingot/from_ore_smelting' })
  event.remove({ id: 'mekanism:processing/lead/ingot/from_dust_blasting' })
  event.remove({ id: 'mekanism:processing/lead/ingot/from_dust_smelting' })
  event.remove({ id: 'mekanism:processing/lead/nugget/from_ingot' })
  event.remove({ id: 'mekanism:processing/lead/storage_blocks/from_ingots' })

  event.remove({ id: 'create:blasting/ingot_lead_compat_mekanism' })
  event.remove({ id: 'create:smelting/ingot_lead_compat_mekanism' })
  event.remove({ id: 'create:splashing/mekanism/crushed_lead_ore' })

  unifyBlocksCutter(['mekanism:block_lead', 'thermal:lead_block'])

  /* Utils */
  function unifyBlocksCutter(blocksVariants) {
    for (let index = 0; index < blocksVariants.length; index++) {
      let result = blocksVariants[index];
      let ingredient = []

      for (let i = 0; i < blocksVariants.length; i++) {
        if (blocksVariants[i] === result) {
          continue
        }
        ingredient.push({ "item": blocksVariants[i] })
      }

      event.custom({
        "type": "minecraft:stonecutting",
        "ingredient": ingredient,
        "result": result,
        "count": 1
      })
    }
  }

  /*function pokeCraftCompact(ball, base) {
    event.remove('pixelmon:pokeball/ball/' + ball + '_ball')

    event.custom({
      "type": "create:compacting",
      "ingredients": [
        {
          "item": 'pixelmon:' + ball + '_ball_lid'
        },
        {
          "item": "minecraft:stone_button"
        },
        {
          "item": 'pixelmon:' + base + '_base'
        }
      ],
      "results": [
        {
          "item": 'pixelmon:' + ball + '_ball'
        }
      ]
    })
  }*/
})  
