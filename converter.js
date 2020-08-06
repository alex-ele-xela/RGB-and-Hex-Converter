const hexCode = { //For converting hex letters to their decimal equivalents
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    A : 10,
    B : 11,
    C : 12,
    D : 13,
    E : 14,
    F : 15
}

const hexToDec = (hex) => { //Accepts two lettered hexcode and converts to decimal
    let first = hex.charAt(0);
    let second = hex.charAt(1);

    return (hexCode[first] * 16) + hexCode[second];
}

const decToHex = (dec) => { //Accepts decimal and converts to hex
    let rem = dec % 16;
    let div = (dec-rem) / 16;
    let hexadecimal = ""

    for (code in hexCode) {
        if (rem === hexCode[code]) {
            hexadecimal += code;
        };
        if (div === hexCode[code]) {
            hexadecimal = code + hexadecimal;
        };
    }

    return hexadecimal;
}

const hexToRGB = (hexSmall) => { //Converts Hexcode to RGB
    const hex = hexSmall.toUpperCase().replace("#", "");
    const red = hexToDec(hex.substring(0,2));
    const green = hexToDec(hex.substring(2,4));
    const blue = hexToDec(hex.substring(4,6));

    return (`The RGB value is : rgb(${red}, ${green}, ${blue})`);
}

const RGBToHex = (rgbRandomCase) => { //Converts RGB to Hex
    rgb = rgbRandomCase.toLowerCase();
    rgb = rgb.replace("rgb", "").replace(")", "").replace("(", "").replace(/\s+/g, '');

    let color = ["", "", ""];
    let index = 0;
    for (letter of rgb) {
        if (!(isNaN(letter))) {
            color[index] += letter;
        } else {
            index += 1;
        }
    };

    const hex = decToHex(color[0]) + decToHex(color[1]) + decToHex(color[2]);
    return `The Hex value is : #${hex}`;
}

const convert = (value) => { //Distinguishes Hex from RGB and converts
    if (value.includes(",")) {
        return RGBToHex(value);
    } else {
        return hexToRGB(value);
    }
}

console.log(convert("#fa456b"));
console.log(convert("RGB(250, 69, 107)"));