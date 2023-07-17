export const getRGB = (hex: string, opacity?: number): string => {
    let h: string | string[] = hex.substring(1).split('');

    if(h.length === 3){
        h = [h[0], h[0], h[1], h[1], h[2], h[2]];
    }

    h = h.join('');

    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);

    if (opacity) {
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else {
        return `rgba(${r}, ${g}, ${b})`;
    }
}