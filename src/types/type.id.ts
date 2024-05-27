export interface TypeId{
  Id: () => string,
}

export interface TypeNumbrCaracter{
  NumberCaracter: Array<string>
}
export interface TypeNumberToId{
  NumberToId: (array: string[], setStrings: Set<string>) => string,
  Shuffle: (array: string[]) => void
}

export interface TypeValidationId{
  ValidationId: () => string
}
export interface TypeAutheId{
  IsAuthID: (sequence: string) => string,
  AuthenticateID: (sequence: string, setSequence: Set<string>) => string 
}