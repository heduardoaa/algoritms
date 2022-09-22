/*
Instructions
If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know only three things about them:

Each resistor has a resistance value.

Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read. To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values.

Each band acts as a digit of a number. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15. In this exercise, you are going to create a helpful program so that you don't have to remember the values of the bands. The program will take 3 colors as input, and outputs the correct value, in ohms. The color bands are encoded as follows:

Black: 0

Brown: 1

Red: 2

Orange: 3

Yellow: 4

Green: 5

Blue: 6

Violet: 7

Grey: 8

White: 9

In resistor-color duo you decoded the first two colors. For instance: orange-orange got the main value 33. The third color stands for how many zeros need to be added to the main value. The main value plus the zeros gives us a value in ohms. For the exercise it doesn't matter what ohms really are. For example:

orange-orange-black would be 33 and no zeros, which becomes 33 ohms.
orange-orange-red would be 33 and 2 zeros, which becomes 3300 ohms.
orange-orange-orange would be 33 and 3 zeros, which becomes 33000 ohms.
(If Math is your thing, you may want to think of the zeros as exponents of 10. If Math is not your thing, go with the zeros. It really is the same thing, just in plain English instead of Math lingo.)

This exercise is about translating the colors into a label:

"... ohms"

So an input of "orange", "orange", "black" should return:

"33 ohms"

When we get more than a thousand ohms, we say "kiloohms". That's similar to saying "kilometer" for 1000 meters, and "kilograms" for 1000 grams. So an input of "orange", "orange", "orange" should return:

"33 kiloohms"
*/

export function decodedResistorValue(colorNamesArray: any) {

    if (colorNamesArray.length !== 3) {
        throw new Error('colorNamesArray should have only 3 color name on the array');
    }

    const bandsColors: any = {
        Black: 0,
        Brown: 1,
        Red: 2,
        Orange: 3,
        Yellow: 4,
        Green: 5,
        Blue: 6,
        Violet: 7,
        Grey: 8,
        White: 9
    }

    let colorNumber: any = "";

    for (let index = 0; index <= colorNamesArray.length; index++) {
        const colorName = colorNamesArray[index] ? colorNamesArray[index].charAt(0).toUpperCase() + colorNamesArray[index].slice(1) : "";

        let ohmsLevel = '0'.repeat((index === 2 ? bandsColors[colorName] : 0));

        if (colorName && Object.keys(bandsColors).includes(colorName) && index < 2) {
            colorNumber = colorNumber + bandsColors[colorName].toString();
        }

        if (index === 2) {
            if (bandsColors[colorName] < 2) {
                ohmsLevel = ohmsLevel + ' ohms';
                colorNumber += ohmsLevel;
            } else {
                colorNumber += ohmsLevel;
                colorNumber = colorNumber.substr(0, colorNumber.length - 3) + ' kiloohms';
            }
        }
    }
    return colorNumber;
}
