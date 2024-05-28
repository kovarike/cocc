export interface TypeTokenCaracter{
  TokenCaracter: string[]
}

export type TokenParms = {
  tokenarray: TypeTokenCaracter,
  setStrings: Set<string>
  
}

export type ShuffleParmsToken = {
  array: string[],
}


export type TypeIdCaracter = {
  IdCaracter: string[]
}

export type IDParms = {
  idarray: TypeIdCaracter,
  setStrings: Set<string>
  
}

export type ShuffleParmsID = {
  array: string[],
}


export interface TypeCaracterUID{
  UIDCaracter: number[] 
}

export type UIDParms = {
  uidarray: TypeCaracterUID,
  setStrings: Set<string>
  
}

export type ShuffleParmsUID = {
  array: number[],
}



export interface TypeToken{
  TextToToken: (array: string[], setStrings: Set<string>) => string,

}

export interface TypeId{
  ID: (array: string[], setStrings: Set<string>) => string,
  
}

export interface TypeUID{
  UID: (array: number[], setStrings: Set<string>) => string,
  
}

// export interface TypeValidationToken{
//   ValidationToken: () => string
// }

// export interface TypeValidationId{
//   ValidationId: () => string
// }

// export interface TypeValidationUID{
//   ValidationUID: () => string
// }

export interface TypeAutheId{
  sequence: string,
  setSequence: Set<string>
}

export interface TypeAuthenticate{
  sequence: string,
  setSequence: Set<string>
}

export interface TypeAutheUID{
  sequence: string,
  setSequence: Set<string>
}

// export interface TypeToken{
//   Token: () => string
// }

// export interface TypeId{
//   Id: () => string,
// }
// export interface TypeUid{
//   Uid: () => string,
// }