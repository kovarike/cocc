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

// src/core/texttoToken.ts
var texttoToken_exports = {};
__export(texttoToken_exports, {
  TextToToken: () => TextToToken
});
module.exports = __toCommonJS(texttoToken_exports);
function TextToToken(array, setStrings) {
  const Shuffle = (array2) => {
    for (let index = array2.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [array2[index], array2[randomIndex]] = [array2[randomIndex], array2[index]];
    }
  };
  const renderToken = array.slice();
  Shuffle(renderToken);
  const toke = renderToken.join("");
  if (setStrings.has(toke)) {
    return TextToToken(array, setStrings);
  } else {
    setStrings.add(toke);
    return toke;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextToToken
});
