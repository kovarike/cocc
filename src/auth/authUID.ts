const AuthenticatedUID = new Set<string>(); // Conjunto para armazenar sequências autenticadas

export function AuthenticateUID(sequence: any): string {
    return "auth_$/" + sequence; // Adiciona um prefixo para autenticar a sequência
}

function IsValidAuth(sequence: string): boolean {
    return sequence.startsWith("auth_$/"); // Verifica se a sequência é autenticada
}

export function AuthAddUID(sequence: string): void {
  AuthenticatedUID.add(sequence); // Adiciona a sequência autenticada ao conjunto
}

export function IsAuthenticatedUID(sequence: string): boolean {
    return AuthenticatedUID.has(sequence); // Verifica se a sequência está autenticada
}