const TokenKey = "User-Token";

// 获取token
export function getToken(){
    return window.sessionStorage.getItem(TokenKey);
}

// 设置token
export function setToken(value) {
    return window.sessionStorage.setItem(TokenKey, value);
}

// 删除token
export function removeToken() {
    return window.sessionStorage.removeItem(TokenKey);
}