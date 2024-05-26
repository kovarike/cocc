import { ValidationToke } from "./setValidation/validationToke";
import { Authenticate} from "./auth/authToke";
import { ValidationID } from "./setValidation/validationID";
import {  AuthenticateID } from "./auth/authID";
import { ValidationUID } from "./setValidation/validationUID";
import { AuthenticateUID} from "./auth/authUID";

const toke = ValidationToke()
const id = ValidationID();
const uid = ValidationUID()
 
export function Toke() {
  const setSequence: Set<string> = new Set();
  const auth = Authenticate(toke, setSequence)
  // console.log(auth);
  // console.log("Token is authenticated", setSequence.has(auth)); 
  return auth;
}




export function Id() {
  const setSequence: Set<string> = new Set();
  const auth = AuthenticateID(id, setSequence)
  // console.log(auth);
  // console.log("Token is authenticated", setSequence.has(auth)); 
  return auth;
}



export function Uid() {
  const setSequence: Set<string> = new Set();
  const auth = AuthenticateUID(uid, setSequence)
  // console.log(auth);
  // console.log("Token is authenticated", setSequence.has(auth)); 
  return auth;
}