export const hexToDec = (hex: number) => {
  let res = parseInt(hex.toString(16));
  return Number.isNaN(res) ? 0 : res;
};

export const decToHex = (dec: number) => {
  return dec.toString(16);
};

export const isHex = (str: string) =>
  Boolean(str.toString().match(/^0x[0-9a-f]+$/i));
