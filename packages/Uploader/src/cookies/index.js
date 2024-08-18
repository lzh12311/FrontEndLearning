import Cookie from 'js-cookie'

class Cookies {
  constructor(prifix) {
    this.PREFIX = prifix || PREFIX || 'MD_'
  }

  get(key) {
    key = this.PREFIX + key
    let value = Cookie.get(key)
    if (!value || value === 'undefined') return null
   
    return value
  }

  set(key, value) {
    key = this.PREFIX + key
    if (typeof value === 'undefined') return undefined
    if (typeof value === 'number' || typeof value === 'string') {
      Cookie.set(key, value)
    } else {
      Cookie.set(key, JSON.stringify(value))
    }
  }

  clear(key) {
    key = this.PREFIX + key
    Cookie.remove(key)
  }

  remove(key) {
    this.clear(key)
  }
}

export default Cookies