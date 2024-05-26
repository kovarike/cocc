
declare module 'cocc' {
  const token: string;
  function ValidationToken(): string;
  export function Token(): string;

  const id: string;
  function ValidationID(): string;
  export function Id(): string;

  const uid: string;
  function ValidationUID(): string;
  export function Uid(): string;
}

declare module 'cocc' {
  export type TypeToken = string;
  export type TypeId = string;
  export type TypeUid = string;

  export function Token(): TypeToken | string;
  export function Id(): TypeId | string;
  export function Uid(): TypeUid | string;

  
}





