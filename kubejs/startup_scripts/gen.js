onEvent('worldgen.remove', event => {

    //Remove Ores
    event.removeOres(ores => {
        ores.blocks = [
            'thermal:copper_ore',
            'pixelmon:silver_ore',
            'thermal:tin_ore',
            'thermal:lead_ore'
        ]
    })

})