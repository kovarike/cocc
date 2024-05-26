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

// src/setValidation/validationToken.ts
var validationToken_exports = {};
__export(validationToken_exports, {
  ValidationToken: () => ValidationToken
});
module.exports = __toCommonJS(validationToken_exports);

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
  const token = renderToken.join("");
  if (setStrings.has(token)) {
    return TextToToken(array, setStrings);
  } else {
    setStrings.add(token);
    return token;
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

// src/setValidation/validationToken.ts
function ValidationToken() {
  const set = /* @__PURE__ */ new Set();
  const Sequence = TextToToken(TextCaracter, set);
  if (Sequence !== Sequence) {
    return Sequence;
  }
  return Sequence;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ValidationToken
});
