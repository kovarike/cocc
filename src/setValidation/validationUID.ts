import { CoreUID } from "../core/uid";
import { UIDCaracter } from "../caracterRandom/caracterUID";

export function ValidationUID() {
  const set: Set<string> = new Set();
  const Sequence = CoreUID({uidarray: UIDCaracter, setStrings: set});
  if (Sequence !== Sequence) {    
    return Sequence;
  }
  return Sequence;
}