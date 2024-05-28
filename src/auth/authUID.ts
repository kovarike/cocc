import { ValidationUID } from "../setValidation/validationUID";
import { TypeAutheUID} from "../types/types";


function IsAuthUID(sequence: string): string {
    return "auth_$/" + sequence; 
}

export function AuthenticateUID({sequence, setSequence}: TypeAutheUID): string {
    const UID = ValidationUID();
    const authUID = IsAuthUID(UID);

    if (setSequence.has(authUID)) {
        return AuthenticateUID({sequence, setSequence});
    } else {
        setSequence.add(authUID);
        return  authUID;
    }
}

