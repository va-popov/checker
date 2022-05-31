"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const App_1 = require("../App");
const mobx_react_lite_1 = require("mobx-react-lite");
const LoginForm = () => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const { store } = (0, react_1.useContext)(App_1.Context);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("input", { onChange: e => setEmail(e.target.value), value: email, type: "text", placeholder: 'Email' }),
        react_1.default.createElement("input", { onChange: e => setPassword(e.target.value), value: password, type: "password", placeholder: '\u041F\u0430\u0440\u043E\u043B\u044C' }),
        react_1.default.createElement("button", { onClick: () => store.login(email, password) }, "\u041B\u043E\u0433\u0438\u043D"),
        react_1.default.createElement("button", { onClick: () => store.registration(email, password) }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")));
};
exports.default = (0, mobx_react_lite_1.observer)(LoginForm);
//# sourceMappingURL=LoginForm.js.map