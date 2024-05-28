import {IDParms, ShuffleParmsID,} from "../types/types"

export function CoreID({idarray, setStrings}: IDParms): string {
  const Shuffle = ({array}: ShuffleParmsID ) => {
    for (let index = array.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }
  };

  function GenerateLimitedID(): string[] {
    const IDLimited = idarray.IdCaracter.slice(0, 25);
    return IDLimited;
  }

  const renderID = GenerateLimitedID();
  Shuffle({array: renderID});
  const setID = renderID.join('');

  if (setStrings.has(setID)) {
    return CoreID({idarray, setStrings});
  }else {
    setStrings.add(setID);
    return setID;
  }
}


