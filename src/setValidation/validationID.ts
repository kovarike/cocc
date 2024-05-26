import { NumberToID } from "../core/numbertoId";
import { NumberCaracter } from "../caracterRandom/numbercaracterId";

export function ValidationID(): string{
  const set = new Set<string>();
  const Sequence = NumberToID(NumberCaracter, set);
  if (Sequence !== Sequence) {    
    return Sequence;
  }
  return Sequence;
}