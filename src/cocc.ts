import { UCID } from "./caracterRandom/ucid";
import { NumberCaracter } from "./caracterRandom/generationId";
import { TextCaracter } from "./caracterRandom/generationToke";
import { ValidateToke } from "./setValidation/validationToke";
import { ValidateID } from "./setValidation/validationID";
import { ValidateUID } from "./setValidation/validationUID";
import { AuthenticateAdd, AuthenticateToke, IsAuthenticated } from "./auth/authToke";
import { IsAuthenticatedID, AuthAddID, AuthenticateID } from "./auth/authID";
import { AuthAddUID, AuthenticateUID, IsAuthenticatedUID } from "./auth/authUID";

export const cToke = ValidateToke(TextCaracter);
export const cId = ValidateID(NumberCaracter);
export const id = ValidateUID(UCID)
 
export function Toke() {
  const auth = AuthenticateToke(cToke);
  AuthenticateAdd(auth);
  console.log(auth)
  console.log("Token is authenticated", IsAuthenticated(auth)); 
}



export function Id() {
  const auth  = AuthenticateID(cId);
  AuthAddID(auth);
  console.log(auth);
  console.log("Id is authenticated", IsAuthenticatedID(auth))
}


export function Uid() {
  const auth  = AuthenticateUID(id);
  AuthAddUID(auth);
  console.log(auth);
  console.log("Uid is authenticated", IsAuthenticatedUID(auth))
}
