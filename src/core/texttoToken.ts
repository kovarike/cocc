export function TextToToken(array: string[], setStrings: Set<string>): string {
  const Shuffle = (array: string[]) => {
      for (let index = array.length - 1; index > 0; index--) {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
      }
  };

  const renderToken: string[] = array.slice();

  Shuffle(renderToken);

  const token: string = renderToken.join('');

  if (setStrings.has(token)) {
      return TextToToken(array, setStrings);
    }else {
      setStrings.add(token);
      return token;
    }
}


