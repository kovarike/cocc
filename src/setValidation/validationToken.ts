import { TextToToken } from "../core/texttoToken";
import { TextCaracter } from "../caracterRandom/textcaracterToke";

export function ValidationToken(): string{
  const set = new Set<string>();
  const Sequence = TextToToken(TextCaracter, set);
  if (Sequence !== Sequence) {    
    return Sequence;
  }
  return Sequence;
}


