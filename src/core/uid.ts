export function UID(array: number[]): string {
  // Função para embaralhar o array usando o algoritmo Fisher-Yates
  const shuffle = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  };

  // Embaralhar o array de números
  shuffle(array);

  // Converter os números embaralhados em uma sequência de caracteres
  const charSequence = array.map(num => num.toString()).join('');

  return charSequence;
}

// Exemplo de uso
