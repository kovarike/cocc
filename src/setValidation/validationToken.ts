import { CoreToken } from "../core/token";
import { TokenCaracter } from "../caracterRandom/tokencaracterToke";

export function ValidationToken() {
  const set: Set<string> = new Set();
  const Sequence = CoreToken({tokenarray: TokenCaracter, setStrings: set});
  if (Sequence !== Sequence) {    
    return Sequence;
  }
  return Sequence;
}
