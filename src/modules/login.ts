export function login (clientId: string, redirectUrl: string): void {
  location.href = `https://mbizmarket.co.id/sso/login?clientId=${clientId}&redirectUrl=${redirectUrl}`
}
