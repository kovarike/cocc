export function UID(array: number[], setStrings: Set<string>): string {
  const Shuffle = (array: number[]) => {
      for (let index = array.length - 1; index > 0; index--) {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
      }
  };

  const renderUID: number[] = array.slice();
  Shuffle(renderUID);
  const ToUID:string = renderUID.join('');

  if (setStrings.has(ToUID)) {
      return UID(array, setStrings);
    }else {
      setStrings.add(ToUID);
      return ToUID;
    }
}


