import { IsId } from "./id";
import { IsToken } from "./token";


export function Token(){
  const set: Set<string> = new Set();
  const token = IsToken({set}) 
  return token;
}

export function Id(): string {
  const set: Set<string> = new Set();
  const id  = IsId({set})
  return id;
}