"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/cocc.ts
var cocc_exports = {};
__export(cocc_exports, {
  Id: () => Id,
  Toke: () => Toke,
  Uid: () => Uid
});
module.exports = __toCommonJS(cocc_exports);

// src/core/texttoToken.ts
function TextToToken(array, setStrings) {
  const Shuffle = (array2) => {
    for (let index = array2.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [array2[index], array2[randomIndex]] = [array2[randomIndex], array2[index]];
    }
  };
  const renderToken = array.slice();
  Shuffle(renderToken);
  const toke2 = renderToken.join("");
  if (setStrings.has(toke2)) {
    return TextToToken(array, setStrings);
  } else {
    setStrings.add(toke2);
    return toke2;
  }
}

// src/caracterRandom/textcaracterToke.ts
var TextCaracter = [
  "@",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "t",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "\xE7",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "T",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "#",
  "$",
  "%",
  "&",
  "*",
  "!",
  "?",
  "/",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];

// src/setValidation/validationToke.ts
function ValidationToke() {
  const set = /* @__PURE__ */ new Set();
  const Sequence = TextToToken(TextCaracter, set);
  if (Sequence !== Sequence) {
    return Sequence;
  }
  return Sequence;
}

// src/auth/authToke.ts
function AuthenticateToke(sequence) {
  return "auth_@/" + sequence;
}
function Authenticate(sequence, setSequence) {
  const toke2 = ValidationToke();
  const AuthToke = AuthenticateToke(toke2);
  if (setSequence.has(AuthToke)) {
    return Authenticate(sequence, setSequence);
  } else {
    setSequence.add(AuthToke);
    return AuthToke;
  }
}

// src/core/numbertoId.ts
function NumberToID(array, setStrings) {
  const Shuffle = (array2) => {
    for (let index = array2.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [array2[index], array2[randomIndex]] = [array2[randomIndex], array2[index]];
    }
  };
  const renderID = array.slice();
  Shuffle(renderID);
  const ID = renderID.join("");
  if (setStrings.has(ID)) {
    return NumberToID(array, setStrings);
  } else {
    setStrings.add(ID);
    return ID;
  }
}

// src/caracterRandom/numbercaracterId.ts
var NumberCaracter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "@", "#", "$"];

// src/setValidation/validationID.ts
function ValidationID() {
  const set = /* @__PURE__ */ new Set();
  const Sequence = NumberToID(NumberCaracter, set);
  if (Sequence !== Sequence) {
    return Sequence;
  }
  return Sequence;
}

// src/auth/authID.ts
function IsAuthID(sequence) {
  return "auth_#/" + sequence;
}
function AuthenticateID(sequence, setSequence) {
  const ID = ValidationID();
  const authID = IsAuthID(ID);
  if (setSequence.has(authID)) {
    return AuthenticateID(sequence, setSequence);
  } else {
    setSequence.add(authID);
    return authID;
  }
}

// src/core/uid.ts
function UID(array, setStrings) {
  const Shuffle = (array2) => {
    for (let index = array2.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [array2[index], array2[randomIndex]] = [array2[randomIndex], array2[index]];
    }
  };
  const renderUID = array.slice();
  Shuffle(renderUID);
  const ToUID = renderUID.join("");
  if (setStrings.has(ToUID)) {
    return UID(array, setStrings);
  } else {
    setStrings.add(ToUID);
    return ToUID;
  }
}

// src/caracterRandom/caracterUID.ts
var UIDCaracter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// src/setValidation/validationUID.ts
function ValidationUID() {
  const set = /* @__PURE__ */ new Set();
  const Sequence = UID(UIDCaracter, set);
  if (Sequence !== Sequence) {
    return Sequence;
  }
  return Sequence;
}

// src/auth/authUID.ts
function IsAuthUID(sequence) {
  return "auth_$/" + sequence;
}
function AuthenticateUID(sequence, setSequence) {
  const UID2 = ValidationUID();
  const authUID = IsAuthUID(UID2);
  if (setSequence.has(authUID)) {
    return AuthenticateUID(sequence, setSequence);
  } else {
    setSequence.add(authUID);
    return authUID;
  }
}

// src/cocc.ts
var toke = ValidationToke();
var id = ValidationID();
var uid = ValidationUID();
function Toke() {
  const setSequence = /* @__PURE__ */ new Set();
  const auth = Authenticate(toke, setSequence);
  return auth;
}
function Id() {
  const setSequence = /* @__PURE__ */ new Set();
  const auth = AuthenticateID(id, setSequence);
  return auth;
}
function Uid() {
  const setSequence = /* @__PURE__ */ new Set();
  const auth = AuthenticateUID(uid, setSequence);
  return auth;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Id,
  Toke,
  Uid
});
