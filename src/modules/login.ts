export function login (clientId: string, redirectUrl: string): void {
  location.href = `https://www.mbizmarket.co.id/sso/login?clientId=${clientId}&redirectUrl=${encodeURIComponent(redirectUrl)}`
}
