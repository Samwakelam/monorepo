

export const getHex = (rgb: string): string => {
    console.log('rgb: ', rgb);
    const b1 = rgb.split('').findIndex((c) => c === '(');
    const code = rgb.slice(b1 + 1, rgb.length -1).split(',');

    const hex = code.map((c, index) => {
        console.log('index: ', index);
        const number: number = index === 3 ?  parseFloat(c) * 255: parseInt(c);
        console.log('number: ', number);
        const value = number.toString(16);
        console.log('value: ', value);
        console.log('test: ', 1 << 8);

        return value.length === 1 ? `0${value}` : value;
    })

    return `#${hex.join('')}`;
}