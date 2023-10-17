export function getConfig (): { clientId: string, redirectUrl: string } | null {
  const clientId = document.querySelector('meta[name=MBIZMARKET-SSO-CLIENT-ID]')?.getAttribute('content')
  const redirectUrl = document.querySelector('meta[name=MBIZMARKET-SSO-REDIRECT-URL]')?.getAttribute('content')

  if (clientId && redirectUrl) {
    return {
      clientId,
      redirectUrl
    }
  }

  return null
}
