export function login (clientId: string, redirectUrl: string): void {
  location.href = `${process.env.HOST_URL}?clientId=${clientId}&redirectUrl=${encodeURIComponent(redirectUrl)}`
}
