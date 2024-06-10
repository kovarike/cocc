import { ValidationToken } from "../setValidation/validationToken";
import { ValidationUID } from "../setValidation/validationUID";
import { Authenticate} from "../auth/authToken";
import { AuthenticateUID} from "../auth/authUID";


const token = ValidationToken();
const uid = ValidationUID();

export function Token(){
  const setSequence: Set<string> = new Set();
  const auth = Authenticate({sequence: token, setSequence: setSequence})
  //console.log(auth);
  //console.log("Token is authenticated", setSequence.has(auth)); 
  return auth;
}


export function Uid(){
  const setSequence: Set<string> = new Set();
  const auth  = AuthenticateUID({sequence: uid, setSequence: setSequence})
  //console.log(auth);
  // console.log("Token is authenticated", setSequence.has(auth)); 
  return auth;
}
