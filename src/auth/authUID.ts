import { ValidationUID } from "../setValidation/validationUID";

function IsAuthUID(sequence: string): string {
    return "auth_$/" + sequence; 
}

export function AuthenticateUID(sequence: string, setSequence: Set<string>): string {
    const UID: string = ValidationUID();
    const authUID: string = IsAuthUID(UID);

    if (setSequence.has(authUID)) {
        return AuthenticateUID(sequence, setSequence);
    } else {
        setSequence.add(authUID);
        return  authUID;
    }
}

