import { join } from 'path'

export function login (clientId: string, redirectUrl: string): void {
  location.href = join(process.env.HOST_URL ?? 'https://mbizmarket.co.id', `/sso/login?clientId=${clientId}&redirectUrl=${encodeURIComponent(redirectUrl)}`)
}
