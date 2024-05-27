export interface TypeUid{
  Uid: () => string,
}
export interface TypeCaracterUID{
  UIDCaracter: number[] | Array<number>
}
export interface TypeUID{
  UID: (array: number[], setStrings: Set<string>) => string,
  Shuffle: (array: number[]) => void
}

export interface TypeValidationUID{
  ValidationUID: () => string
}
export interface TypeAutheUID{
  IsAuthUID: (sequence: string) => string,
  AuthenticateUID: (sequence: string, setSequence: Set<string>) => string 
}