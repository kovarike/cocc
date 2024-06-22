import { regex } from "../RegExp/regExp";


export function IsValid(params: string, value?:string): boolean {
  if (value) {
    // Se value estiver definido, estamos tentando validar um UUID (v4 ou v5) e um token ao mesmo tempo
    return (regex.v4.test(params) || regex.v5.test(params)) && regex.token.test(value);
  } else {
    // Caso contrário, params pode ser um UUID ou um token
    return regex.v4.test(params) || regex.v5.test(params) || regex.token.test(params);
  }
}

