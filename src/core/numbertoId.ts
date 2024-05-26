export function NumberToID(array: string[], setStrings: Set<string>): string {
  const Shuffle = (array: string[]) => {
      for (let index = array.length - 1; index > 0; index--) {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
      }
  };

  const renderID: string[] = array.slice();

  Shuffle(renderID);

  const ID: string = renderID.join('');

  if (setStrings.has(ID)) {
      return NumberToID(array, setStrings);
    }else {
      setStrings.add(ID);
      return ID;
    }
}


