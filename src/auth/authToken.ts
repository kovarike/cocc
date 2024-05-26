import { ValidationToken } from "../setValidation/validationToken"

function AuthenticateToken(sequence: string): string {
    return "auth_@/" + sequence; 
}

export function Authenticate(sequence: string, setSequence: Set<string>): string {
    const token: string = ValidationToken();
    const AuthToken: string = AuthenticateToken(token);

    if (setSequence.has(AuthToken)) {
        return Authenticate(sequence, setSequence);
    } else {
        setSequence.add(AuthToken);
        return  AuthToken;
    }
}
