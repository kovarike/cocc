const AuthenticatedID = new Set<string>(); // Conjunto para armazenar sequências autenticadas

export function AuthenticateID(sequence: any): string {
    return "auth_#/" + sequence; // Adiciona um prefixo para autenticar a sequência
}

function IsValidAuth(sequence: string): boolean {
    return sequence.startsWith("auth_#/"); // Verifica se a sequência é autenticada
}

export function AuthAddID(sequence: string): void {
  AuthenticatedID.add(sequence); // Adiciona a sequência autenticada ao conjunto
}

export function IsAuthenticatedID(sequence: string): boolean {
    return AuthenticatedID.has(sequence); // Verifica se a sequência está autenticada
}