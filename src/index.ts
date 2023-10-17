
import { login } from './modules/login'

const modules = {
  login
}

window.MBIZMARKET = modules
export default modules

declare global {
  interface Window {
    MBIZMARKET: typeof modules
  }
}
