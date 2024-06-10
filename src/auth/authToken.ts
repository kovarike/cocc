import { ValidationToken } from "../setValidation/validationToken"
import {TypeAuthenticate} from"../types/types"

// export function isToken({sequence, setSequence}:TypeAuthenticate): string {
//     const isAuth = `Token is authenticated: ${setSequence.has(sequence)}`; 
//     return isAuth;
// }

export function Authenticate({sequence, setSequence}:TypeAuthenticate): string {
    const token = ValidationToken();
    // const AuthToken = AuthenticateToken(token);
    if (setSequence.has(token)) {
        return Authenticate({sequence, setSequence});
    } else {
        setSequence.add(token);
        return  token;
    }
}
