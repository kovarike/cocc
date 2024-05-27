import { TextToToken } from "../core/texttoToken";
import { TextCaracter } from "../caracterRandom/textcaracterToke";

export function ValidationToken(): string{
  const set: Set<string> = new Set();
  const Sequence: string = TextToToken(TextCaracter, set);
  if (Sequence !== Sequence) {    
    return Sequence;
 
  }

  return Sequence;
  
}
