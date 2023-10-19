import { getConfigFromContainer } from '../utils/config'
import { login } from './login'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styleSheet from 'bundle-text:../styles.scss'

export function createLoginButton (container: HTMLElement): void {
  const config = getConfigFromContainer(container)
  if (!config) {
    console.error(`[MBIZMARKET] Can't initialize button on element ${container}: Invalid Configuration`)
    return
  }

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
  container.append(button)
}

export function injectStyleSheet (): void {
  const styleTag = document.createElement('style')
  styleTag.innerText = styleSheet

  document.querySelector('head')?.append(styleTag)
}

export function init (): void {
  // Inject CSS for login button
  injectStyleSheet()

  // Create buttons
  const buttonContainers = document.querySelectorAll('[data-mbizmarket-login]')
  buttonContainers.forEach((container) => {
    createLoginButton(container as HTMLElement)
  })
}
