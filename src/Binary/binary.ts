import { randomBytes } from 'crypto';

export function Binary(): string {
  const minBin = 102; 
  const maxBin = 1024 * 1024 + 1024; 
  const bin = Math.floor(Math.random() * (maxBin - minBin + 1)) + minBin; 
   
  const randomBytesBuffer = randomBytes(Math.ceil(bin / 8));
  let binaryString = '';
  for (let index = 0; index < randomBytesBuffer.length; index++) {
    const bytes = randomBytesBuffer[index];
    binaryString += bytes.toString(2).padStart(8, '0'); // Converter cada byte para uma sequência binária de 8 bits
  }
  return binaryString.substring(0, bin); 
}