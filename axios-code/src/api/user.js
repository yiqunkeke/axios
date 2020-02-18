import request from "@/utils/request";

// 登录
export function login(username, password) {
    let data = new URLSearchParams();
    data.append("username", username);
    data.append("password", password);
    return request({
        url: "/v2/login",
        method: "post",
        data: data
    })
}