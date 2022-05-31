"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const RequestState_1 = require("../types/RequestState");
class UserStore {
    constructor() {
        this.user = null;
        this.state = RequestState_1.RequestState.PENDING;
        this.loginVk = (code) => {
            this.state = RequestState_1.RequestState.LOADING;
            return fetch(`${process.env.REACT_APP_API_HOST}/auth/login/vk`, {
                method: "POST",
                body: JSON.stringify({ code }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                switch (res.status) {
                    case 200:
                    case 201:
                        return res.json();
                    default:
                        this.setError();
                        return Promise.reject();
                }
            })
                .then((user) => this.setUser(user));
        };
        this.getProfile = () => {
            this.state = RequestState_1.RequestState.LOADING;
            const token = sessionStorage.getItem("token");
            if (!token)
                Promise.reject();
            return fetch(`${process.env.REACT_APP_API_HOST}/users/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                switch (res.status) {
                    case 200:
                    case 201:
                        return res.json();
                    default:
                        this.setError();
                        return Promise.reject();
                }
            })
                .then((user) => this.setUser(user));
        };
        this.logout = () => {
            this.user = null;
            sessionStorage.clear();
            this.state = RequestState_1.RequestState.PENDING;
        };
        this.setUser = (user) => {
            this.user = user;
            this.state = RequestState_1.RequestState.SUCCESS;
            if (user["token"]) {
                sessionStorage.setItem("token", user.token);
            }
        };
        this.setError = () => {
            this.state = RequestState_1.RequestState.ERROR;
        };
        (0, mobx_1.makeObservable)(this);
    }
}
exports.default = new UserStore();
//# sourceMappingURL=UserStore.js.map