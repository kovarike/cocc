import { UID } from "../core/uid";

function isSequenceUnique(sequence: string, set: Set<string>): boolean {
  return !set.has(sequence);
}

export function ValidateUID(array: number[]): string | null {
  const set = new Set<string>();

  // Tentar gerar sequências únicas até que todas as possibilidades sejam exauridas
  let attempts = array.length * 2; // Número arbitrário de tentativas
  while (attempts > 0) {
      const shuffledSequence = UID(array);
      if (isSequenceUnique(shuffledSequence, set)) {
          set.add(shuffledSequence);
          return shuffledSequence;
      }
      attempts--;
  }

  return null; // Se todas as possibilidades forem exauridas e não houver sequências únicas
}
