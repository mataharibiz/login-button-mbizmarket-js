export interface Config {
  clientId: string;
  redirectUrl: string;
  textConnect?: string;
  textConnecting?: string;
  textConnected?: string;
  buttonClass?: string;
}

export function getConfigFromContainer (container: HTMLElement): Config | null {
  const clientId = container.dataset.mbizmarketClientId
  const redirectUrl = container.dataset.mbizmarketRedirectUrl

  if (clientId && redirectUrl) {
    return {
      clientId,
      redirectUrl,
      textConnect: container.dataset.textConnect,
      textConnecting: container.dataset.textConnecting,
      textConnected: container.dataset.textConnected,
      buttonClass: container.dataset.buttonClass
    }
  }

  return null
}
