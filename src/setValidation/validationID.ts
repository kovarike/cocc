import { NumberToID } from "../core/numbertoId";
import { NumberCaracter } from "../caracterRandom/numbercaracterId";

export function ValidationID(): string{
  const set: Set<string> = new Set();
  const Sequence: string = NumberToID(NumberCaracter, set);
  if (Sequence !== Sequence) {    
    return Sequence;
  }
  return Sequence;
}