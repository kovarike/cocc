import {TypeToken} from "./types/type.token"
import {TypeId} from "./types/type.id"
import {TypeUid} from "./types/type.uid"
import { ValidationToken } from "./setValidation/validationToken";
import { Authenticate} from "./auth/authToken";
import { ValidationID } from "./setValidation/validationID";
import {  AuthenticateID } from "./auth/authID";
import { ValidationUID } from "./setValidation/validationUID";
import { AuthenticateUID} from "./auth/authUID";

const token = ValidationToken()
const id = ValidationID();
const uid = ValidationUID()
 
function Token(): TypeToken | string {
  const setSequence: Set<string> = new Set();
  const auth = Authenticate(token, setSequence)
  // console.log(auth);
  // console.log("Token is authenticated", setSequence.has(auth)); 
  return auth;
}




function Id():TypeId | string {
  const setSequence: Set<string> = new Set();
  const auth = AuthenticateID(id, setSequence)
  // console.log(auth);
  // console.log("Token is authenticated", setSequence.has(auth)); 
  return auth;
}



function Uid():TypeUid | string {
  const setSequence: Set<string> = new Set();
  const auth = AuthenticateUID(uid, setSequence)
  // console.log(auth);
  // console.log("Token is authenticated", setSequence.has(auth)); 
  return auth;
}


export * from './caracterRandom/textcaracterToke';
export * from './core/texttoToken';
export * from './setValidation/validationToken';
export * from './auth/authToken';

export * from './caracterRandom/numbercaracterId';
export * from './core/numbertoId';
export * from './setValidation/validationID';
export * from './auth/authID';

export * from './caracterRandom/caracterUID';
export * from './core/uid';
export * from './setValidation/validationUID';
export * from './auth/authUID';

export{
  Token,
  Id,
  Uid
}

