import { IdParams } from "../types/types";
import { Binary } from "../Binary/binary";
import { Bytes } from "../Bytes/bytes";
import { Hexadecimal } from "../Hexadecimal/hex";

export function IsId({set}: IdParams): string{
  const bin = Binary();
  const byte = Bytes(bin);
  let hexString = Hexadecimal(byte);
  
  try {
    hexString = hexString.replace(/[^0-9a-f]/gi, '');

    const byteArray = [];
    for (let index = 0; index < hexString.length; index += 2) {
      byteArray.push(parseInt(hexString.substring(index, index + 2), 16));
    };

    byteArray[6] = (byteArray[6] & 0x0f) | 0x40; 
    byteArray[8] = (byteArray[8] & 0x3f) | 0x80; 

    const id = byteArray.map(b => {
      return (b < 16 ? '0' : '') + b.toString(16);
    }).join('');

    const randomId =[
      id.substring(0, 8),
      id.substring(8, 12),
      id.substring(12, 16),
      id.substring(16, 20),
      id.substring(20, 32)
    ].join('-');

    if (set.has(randomId)) {
      return `${randomId} id is duplicated.`;
    }else {
      set.add(randomId);
      return randomId;
    }

  } catch (error) {
    console.log(error);

    return 'Error while generating ID';
    
  }
  
 
}
  
  





