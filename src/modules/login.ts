import { getConfig } from '../utils/config'

export function login (): void {
  const config = getConfig()
  if (!config) {
    alert('ERROR: Please configure client ID and redirect URL correctly')
    return
  }

  location.href = `https://mbizmarket.co.id/sso/login?clientId=${config.clientId}&next=${config.redirectUrl}`
}
