/**
 * @author Alex Mourtziapis
 * @copyright 2015 Shunless Studio.
 */

var blips_sfx = jsfxlib.createWave(["sine", 0.0000, 0.4000, 0.0000, 0.0920, 0.0000, 0.2080, 20.0000, 286.0000, 2400.0000, -0.6740, 0.0000, 0.0000, 0.0100, 0.0003, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 1.0000, 0.0000, 0.0000, 0.0480, 0.0000]),
    // hit tunes
    hit_sfx = [
        jsfxlib.createWave(["square", 0.0000, 0.4000, 0.0000, 0.0280, 0.0000, 0.1180, 20.0000, 525.0000, 2400.0000, -0.6580, 0.0000, 0.0000, 0.0100, 0.0003, 0.0000, 0.0000, 0.0000, 0.2415, 0.0000, 0.0000, 0.0000, 0.0000, 1.0000, 0.0000, 0.0000, 0.2270, 0.0000]),
        jsfxlib.createWave(["square", 0.0000, 0.4000, 0.0000, 0.0620, 0.0000, 0.2840, 20.0000, 762.0000, 2400.0000, -0.3740, 0.0000, 0.0000, 0.0100, 0.0003, 0.0000, 0.0000, 0.0000, 0.5000, 0.0000, 0.0000, 0.0000, 0.0000, 1.0000, 0.0000, 0.0000, 0.0170, 0.0000])
    ],
    // level up tunes
    levelup_sfx = [
        jsfxlib.createWave(["square", 0.0000, 0.4000, 0.6720, 1.4240, 0.3510, 1.5260, 636.0000, 2166.0000, 1208.0000, -0.2680, 0.0800, 0.1320, 35.9545, 0.6126, -0.0240, -0.9480, 0.7570, 0.0435, 0.5860, 0.3992, -0.9740, -0.4340, 0.8020, -0.1560, 0.5260, 0.7920, 0.5720]),
        jsfxlib.createWave(["square", 0.0000, 0.4000, 0.2420, 1.1740, 2.0970, 0.9460, 1529.0000, 139.0000, 1995.0000, -0.2060, 0.8840, 0.7690, 3.7532, 0.6438, -0.9660, -0.7860, 0.4190, 0.3830, 0.4820, 0.1912, -0.9040, -0.0820, 0.6240, -0.5680, 0.0150, 0.3450, 0.2600]),
        jsfxlib.createWave(["synth", 0.0000, 0.4000, 0.0820, 1.7420, 2.6370, 0.6580, 1661.0000, 2057.0000, 69.0000, 0.8860, 0.4020, 0.1880, 17.6703, 0.9337, 0.3800, -0.0900, 0.2220, 0.1315, -0.7740, 0.1648, -0.1600, -0.4080, 0.4390, -0.3580, 0.8840, 0.9060, -0.1000])
    ];
