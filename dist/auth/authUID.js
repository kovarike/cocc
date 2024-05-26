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

// src/auth/authUID.ts
var authUID_exports = {};
__export(authUID_exports, {
  AuthenticateUID: () => AuthenticateUID
});
module.exports = __toCommonJS(authUID_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthenticateUID
});
