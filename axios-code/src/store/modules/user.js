import { getToken } from "@/utils/token";
import { login } from "@/api/user";

const user = {
    state: {
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        }
    },
    actions: {
        Login(ctx, form) {
        }
    }
}