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

// src/setValidation/validationID.ts
var validationID_exports = {};
__export(validationID_exports, {
  ValidationID: () => ValidationID
});
module.exports = __toCommonJS(validationID_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ValidationID
});
