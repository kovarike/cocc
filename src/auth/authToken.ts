import { ValidationToken } from "../setValidation/validationToken"
import {TypeAuthenticate} from"../types/types"

// function AuthenticateToken(sequence: string): string {
//     return "auth_@-" + sequence; 
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
