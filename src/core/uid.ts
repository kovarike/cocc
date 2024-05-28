import { ShuffleParmsUID, UIDParms } from "../types/types";

export function CoreUID({uidarray, setStrings}: UIDParms): string{
  const Shuffle = ({array}: ShuffleParmsUID) => {
      for (let index = array.length - 1; index > 0; index--) {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
      }
  };

  function GenerateLimitedToken() {
    const uidLimited = uidarray.UIDCaracter.slice(0, 25);
    return uidLimited;
  }
  
  const renderUID = GenerateLimitedToken();
  Shuffle({array: renderUID});
  const setUID:string = renderUID.join('');
  
  if (setStrings.has(setUID)) {
      return CoreUID({uidarray, setStrings});
    }else {
      setStrings.add(setUID);
      return setUID;
    }
}




