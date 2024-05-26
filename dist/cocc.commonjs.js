"use strict";

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
  const token2 = renderToken.join("");
  if (setStrings.has(token2)) {
    return TextToToken(array, setStrings);
  } else {
    setStrings.add(token2);
    return token2;
  }
}

// src/setValidation/validationToken.ts
function ValidationToken() {
  const set = /* @__PURE__ */ new Set();
  const Sequence = TextToToken(TextCaracter, set);
  if (Sequence !== Sequence) {
    return Sequence;
  }
  return Sequence;
}

// src/auth/authToken.ts
function AuthenticateToken(sequence) {
  return "auth_@/" + sequence;
}
function Authenticate(sequence, setSequence) {
  const token2 = ValidationToken();
  const AuthToken = AuthenticateToken(token2);
  if (setSequence.has(AuthToken)) {
    return Authenticate(sequence, setSequence);
  } else {
    setSequence.add(AuthToken);
    return AuthToken;
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
var token = ValidationToken();
var id = ValidationID();
var uid = ValidationUID();
function Token() {
  const setSequence = /* @__PURE__ */ new Set();
  const auth = Authenticate(token, setSequence);
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

// src/cocc.commonjs.ts
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
module.exports = {
  Token,
  Id,
  Uid
};
