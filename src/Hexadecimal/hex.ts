export function Hexadecimal(bytes: Uint8Array): string {
  return Array.prototype.map.call(bytes, (byte: number) => {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('');
}
