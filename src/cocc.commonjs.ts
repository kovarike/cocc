import { TextCaracter } from "./caracterRandom/textcaracterToke";
import { TextToToken } from "./core/texttoToken";
import { Authenticate} from "./auth/authToken";
import { ValidationToken } from "./setValidation/validationToken";
import  {Token}  from "./cocc";

import { NumberCaracter } from "./caracterRandom/numbercaracterId";
import { NumberToID } from "./core/numbertoId";
import {  AuthenticateID } from "./auth/authID";
import { ValidationID } from "./setValidation/validationID";
import  {Id}  from "./cocc";

import { UIDCaracter } from "./caracterRandom/caracterUID";
import { UID } from "./core/uid";
import { AuthenticateUID} from "./auth/authUID";
import { ValidationUID } from "./setValidation/validationUID";
import  {Uid}  from "./cocc";

exports.TextCaracter = TextCaracter;
exports.TextToToken = TextToToken;
exports.Authenticate = Authenticate;
exports.ValidationToken = ValidationToken;

exports.NumberCaracter = NumberCaracter;
exports.NumberToID = NumberToID;
exports.AuthenticateID = AuthenticateID;
exports.ValidationID = ValidationID;

exports.UIDCaracter = UIDCaracter;
exports.UID = UID;
exports.AuthenticateUID = AuthenticateUID;
exports.ValidationUID = ValidationUID;

export = {
  Token,
  Id,
  Uid
};