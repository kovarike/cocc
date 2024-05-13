export function shuffleTextToToke(array: string[]): string {
  // Função para embaralhar o array usando o algoritmo Fisher-Yates
  const shuffle = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  };

  // Copiar o array original para evitar modificar o original
  const RenderToke = array.slice();
  
  // Embaralhar o array copiado
  shuffle(RenderToke);
  // Juntar as strings em uma única string e retornar
  return RenderToke.join('');
}