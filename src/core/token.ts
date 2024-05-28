import {TokenParms, ShuffleParmsToken} from "../types/types"

export function CoreToken({tokenarray, setStrings}: TokenParms): string {
  const Shuffle = ({array}:ShuffleParmsToken) => {
    for (let index = array.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }
  };

  function GenerateLimitedToken() {
    const tokenLimited = tokenarray.TokenCaracter.slice(0, 25);
    return tokenLimited;
  }
  
  const renderToken = GenerateLimitedToken();
  Shuffle({array: renderToken});
  const setToken = renderToken.join('');

  if (setStrings.has(setToken)) {
    return CoreToken({tokenarray, setStrings});
  }else {
    setStrings.add(setToken);
    return setToken;
  }

}


