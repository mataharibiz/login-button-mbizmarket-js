export function login (clientId: string, redirectUrl: string): void {
  location.href = `${process.env.HOST_URL}/sso/login?clientId=${clientId}&redirectUrl=${encodeURIComponent(redirectUrl)}`
}
