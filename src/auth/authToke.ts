import { ValidationToke } from "../setValidation/validationToke"

function AuthenticateToke(sequence: string): string {
    return "auth_@/" + sequence; 
}

export function Authenticate(sequence: string, setSequence: Set<string>): string {
    const toke = ValidationToke();
    const AuthToke = AuthenticateToke(toke);

    if (setSequence.has(AuthToke)) {
        return Authenticate(sequence, setSequence);
    } else {
        setSequence.add(AuthToke);
        return  AuthToke;
    }
}
