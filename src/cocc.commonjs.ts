// import { TokenCaracter } from "./caracterRandom/tokencaracterToke";
// import { CoreToken } from "./core/token";
// import { Authenticate} from "./auth/authToken";
// import { ValidationToken } from "./setValidation/validationToken";
// import  {Token}  from "./cocc";

// import { IdCaracter } from "./caracterRandom/idcaracterId";
// import { CoreID } from "./core/Id";
// import {  AuthenticateID } from "./auth/authID";
// import { ValidationID } from "./setValidation/validationID";
// import  {Id}  from "./cocc";

// import { UIDCaracter } from "./caracterRandom/caracterUID";
// import { CoreUID } from "./core/uid";
// import { AuthenticateUID} from "./auth/authUID";
// import { ValidationUID } from "./setValidation/validationUID";
// import  {Uid}  from "./cocc";

// exports.TokenCaracter = TokenCaracter;
// exports.CoreToken = CoreToken;
// exports.Authenticate = Authenticate;
// exports.ValidationToken = ValidationToken;

// exports.IdCaracter = IdCaracter;
// exports.CoreID = CoreID;
// exports.AuthenticateID = AuthenticateID;
// exports.ValidationID = ValidationID;

// exports.UIDCaracter = UIDCaracter;
// exports.CoreUID = CoreUID;
// exports.AuthenticateUID = AuthenticateUID;
// exports.ValidationUID = ValidationUID;

// export{
//   Token as Token,
//   Id as Id,
//   Uid as Uid
// };





import { IsValid} from "./isValidation/isValid";             
import { Token, Id } from "./random/index";

export const cocc = {
 IsValid,
 Token,
 Id
};
