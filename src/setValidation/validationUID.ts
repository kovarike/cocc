import { UID } from "../core/uid";
import { UIDCaracter } from "../caracterRandom/caracterUID";



export function ValidationUID(): string{
  const set: Set<string> = new Set();
  const Sequence:string = UID(UIDCaracter, set);
  if (Sequence !== Sequence) {    
    return Sequence;
  }
  return Sequence;
}