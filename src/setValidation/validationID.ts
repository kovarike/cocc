import { CoreID } from "../core/Id";
import { IdCaracter } from "../caracterRandom/idcaracterId";

export function ValidationID(){
  const set: Set<string> = new Set();
  const Sequence = CoreID({idarray: IdCaracter, setStrings: set})
  if (Sequence !== Sequence) {    
    return Sequence;
  }
  return Sequence;
}