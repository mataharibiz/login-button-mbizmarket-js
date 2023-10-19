
import { login } from './modules/login'
import { init } from './modules/init'

const modules = {
  login,
  init
}

window.MBIZMARKET = modules
export default modules

declare global {
  interface Window {
    MBIZMARKET: typeof modules
  }
}
