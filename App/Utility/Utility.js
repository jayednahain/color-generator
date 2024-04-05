class Utility {
    static generateRandomRGB = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    };

    static generateHexColorFromRgb = (rgb) => {
        const components = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        const hex = "#" +
            ("0" + parseInt(components[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(components[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(components[3], 10).toString(16)).slice(-2);
        return hex.toUpperCase();
    };
}

export { Utility };