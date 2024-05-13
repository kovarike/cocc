const AuthenticatedToke = new Set<string>(); // Conjunto para armazenar sequências autenticadas

export function AuthenticateToke(sequence: any): string {
    return "auth_@/" + sequence; // Adiciona um prefixo para autenticar a sequência
}

function IsValidAuth(sequence: string): boolean {
    return sequence.startsWith("auth_@/"); // Verifica se a sequência é autenticada
}

export function AuthenticateAdd(sequence: string): void {
  AuthenticatedToke.add(sequence); // Adiciona a sequência autenticada ao conjunto
}

export function IsAuthenticated(sequence: string): boolean {
    return AuthenticatedToke.has(sequence); // Verifica se a sequência está autenticada
}

