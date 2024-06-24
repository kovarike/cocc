import { Tokenparams } from "../types/types";
import { Binary } from "../Binary/binary";
import { Bytes } from "../Bytes/bytes";
import { Hexadecimal } from "../Hexadecimal/hex";

export function IsToken({set}: Tokenparams): string {
  const bin = Binary();
  const byte = Bytes(bin);
  let hexString = Hexadecimal(byte);

  try {
    const bytes = new Uint8Array(hexString.match(/[\da-f]{2}/gi)!.map(h => parseInt(h, 16)));
    
    const base64String = Buffer.from(bytes).toString('base64');

    const token = base64String.replace(/[+/=]/g, '').substring(0, 36);

    if (set.has(token)) {
      return `${token} id is duplicated.`;
    }else {
      set.add(token);
      return token;
    }
  
  } catch (error) {
    console.log(error);

    return 'Error while generating Token';
    
  }


}


 



