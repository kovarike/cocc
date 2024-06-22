export function Bytes(binaryString: string): Uint8Array {
  const bytes = [];
  for (let index = 0; index < binaryString.length; index += 8) {
      const byte = binaryString.substring(index, index + 8); // Extrai um grupo de 8 bits
      const byteSequece = parseInt(byte, 2);
      bytes.push(byteSequece); // Adiciona o valor inteiro ao array de bytes
    }
     // Converte o grupo de bits para um valor inteiro
  return new Uint8Array(bytes); // Retorna um objeto Uint8Array contendo os bytes
}