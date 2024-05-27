export interface TypeToken{
  Token: () => string
}
export interface TypeTextCaracter{
  TextCaracter: Array<string>
}
export interface TypeTextToToken{
  TextToToken: (array: string[], setStrings: Set<string>) => string,
  Shuffle: (array: string[]) => void
}

export interface TypeValidationToken{
  ValidationToken: () => string
}
export interface TypeAuthenticate{
  AuthenticateToken: (sequence: string) => string,
  Authenticate: (sequence: string, setSequence: Set<string>) => string 
}