import { UID } from "../core/uid";
import { UIDCaracter } from "../caracterRandom/caracterUID";

export function ValidationUID(): string{
  const set = new Set<string>();
  const Sequence = UID(UIDCaracter, set);
  if (Sequence !== Sequence) {    
    return Sequence;
  }
  return Sequence;
}