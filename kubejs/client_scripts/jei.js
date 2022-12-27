onEvent('jei.hide.items', event => {

	//Hide items in JEI
	event.hide([
		/appliedenergistics2:facade/,
		'tconstruct:copper_ore', 
		'thermal:copper_ore', 
		'mekanism:copper_ore', 
		'thermal:copper_plate', 
		'mekanism:dust_copper', 
		'mekanism:nugget_copper', 
		'thermal:copper_nugget', 
		'tconstruct:copper_nugget', 
		'thermal:copper_ingot', 
		'mekanism:ingot_copper', 
		'tconstruct:copper_ingot',
		'pixelmon:silver_ore', 
		'pixelmon:silver_ingot', 
		'pixelmon:silver_helmet',
		'pixelmon:silver_chestplate',
		'pixelmon:silver_leggings',
		'pixelmon:silver_boots',
		'mekanism:dust_tin', 
		'mekanism:nugget_tin', 
		'mekanism:ingot_tin', 
		'thermal:tin_ore',
		'thermal:lead_ore', 
		'mekanism:ingot_lead', 
		'mekanism:nugget_lead', 
		'mekanism:dust_lead',
	])

})

onEvent('jei.add.items', event => {

	//Add items in JEI
	event.add([
		Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'),
	])

})

onEvent('jei.informations', event => {

	//Add informations in JEI

})