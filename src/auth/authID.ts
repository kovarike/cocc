import { ValidationID } from "../setValidation/validationID";

function IsAuthID(sequence: string): string {
    return "auth_#/" + sequence; 
}

export function AuthenticateID(sequence: string, setSequence: Set<string>): string {
    const ID: string = ValidationID();
    const authID: string = IsAuthID(ID);

    if (setSequence.has(authID)) {
        return AuthenticateID(sequence, setSequence);
    } else {
        setSequence.add(authID);
        return  authID;
    }
}

