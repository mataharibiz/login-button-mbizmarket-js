import { getConfigFromContainer, Config } from '../utils/config'
import { login } from './login'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styleSheet from 'bundle-text:../styles.scss'

export function createLoginButton (config: Config): HTMLButtonElement {
  const button = document.createElement('button') as HTMLButtonElement
  const spinner = document.createElement('div') as HTMLDivElement
  const text = document.createElement('span') as HTMLSpanElement

  text.textContent = config.textConnect ?? 'Hubungkan dengan Mbizmarket'

  button.classList.add('mb-login-button')
  spinner.classList.add('mb-login-button__spinner')

  button.appendChild(spinner)
  button.appendChild(text)

  button.addEventListener('click', () => {
    // Maintain current width
    button.style.width = `${button.clientWidth}px`
    button.disabled = true
    button.classList.add('mb-connecting')

    text.textContent = config.textConnecting ?? 'Menghubungkan...'
    login(config.clientId, config.redirectUrl)
  })

  return button
}

export function createStyleSheet (): CSSStyleSheet {
  const sheet = new CSSStyleSheet()
  sheet.replaceSync(styleSheet)
  return sheet
}

export function init (): void {
  // Create stylesheet instance
  const sheet = createStyleSheet()

  // Create buttons
  const buttonContainers = document.querySelectorAll('[data-mbizmarket-login]')
  buttonContainers.forEach((container) => {
    const config = getConfigFromContainer(container as HTMLElement)
    if (!config) {
      console.error(`[MBIZMARKET] Can't initialize button on element ${container}: Invalid Configuration`)
      return
    }

    const shadow = container.attachShadow({ mode: 'closed' })
    const button = createLoginButton(config)
    shadow.adoptedStyleSheets = [sheet]
    shadow.appendChild(button)
  })
}
