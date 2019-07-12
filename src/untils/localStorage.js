const accessToken = 'mall-h5-token'
const authType = 'mall-h5-auth'
const cartKey = 'mall-h5-cart'
export const setAuthInfo = (authinfo) => {
    localStorage.setItem(authType, JSON.stringify(authinfo))
}
export const removeAuthInfo = () => {
    localStorage.removeItem(authType)
}
export const getAuthInfo = () => {
    const info = localStorage.getItem(authType)
    if (info) {
        return JSON.parse(info)
    }
    return null
}
export const saveCartList = (cart) => {
    localStorage.setItem(cartKey, JSON.stringify(cart))
}
export const removeCartList= () => {
    localStorage.removeItem(cartKey)
}
export const getCartList =  () => {
    const cartinfo = localStorage.getItem(cartKey)
    if (cartinfo) {
        return JSON.parse(cartKey)
    }
    return null
}
export const getToken = () => {
    const tokn = localStorage.getItem(accessToken)
    if (tokn) {
        return JSON.parse(accessToken)
    }
    return null
}
export const saveToken = (token) => {
    if (!token) return
    localStorage.setItem(accessToken, JSON.stringify(token))
}
export const refreshTkoen = (accessToken) => {
    if (accessToken.expire > (new Date().getTime())) {
       return accessToken
    }
}