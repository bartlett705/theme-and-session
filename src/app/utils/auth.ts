import * as Cookies from 'js-cookie'

const AUTH_COOKIE_NAME = 'foo'

export function authUser(callback: (user) => void) {
    const deviceID = getOrSetDeviceID()

    callback({ deviceID })
}

function getOrSetDeviceID() {
    const validatedStoredID = validateDeviceID(Cookies.get(AUTH_COOKIE_NAME))
    return validatedStoredID || setDeviceID()
}

function setDeviceID() {
    const newID = generateUUID()

    Cookies.set(AUTH_COOKIE_NAME, newID)

    return newID
}

function validateDeviceID(deviceID) {
    return typeof deviceID === 'string' && deviceID.length >= 16 && deviceID
}

function generateUUID() {
    let uuid = ''
    let i
    let random

    for (i = 0; i < 32; i++) {
      // tslint:disable-next-line:no-bitwise
      random = Math.random() * 16 | 0

      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-'
      }
      // tslint:disable-next-line:no-bitwise
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16)
    }

    return uuid
}
