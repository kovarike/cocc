export function shuffleNumberToId(array: string[]): string {
  // Função para embaralhar o array usando o algoritmo Fisher-Yates
  const shuffle = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  };

  // Limitar cada string do array a 30 caracteres
  const RenderId = array.slice();
  // Embaralhar o array limitado
  shuffle(RenderId);
  // Juntar as strings em uma única string e retornar
  return RenderId.join('');
}
