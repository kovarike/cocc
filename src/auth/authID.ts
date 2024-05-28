import { ValidationID } from "../setValidation/validationID";
import {TypeAutheId} from "../types/types"

function IsAuthID(sequence: string): string {
    return "auth_#/" + sequence; 
}

export function AuthenticateID({sequence, setSequence}: TypeAutheId): string {
    const ID = ValidationID();
    const authID = IsAuthID(ID);

    if (setSequence.has(authID)) {
        return AuthenticateID({sequence, setSequence});
    } else {
        setSequence.add(authID);
        return  authID;
    }
}

