"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = exports.store = void 0;
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const _1 = require(".");
const store_1 = require("./store/store");
exports.store = new store_1.default();
exports.Context = (0, react_1.createContext)({
    store: exports.store,
});
react_dom_1.default.render(react_1.default.createElement(exports.Context.Provider, { value: {
        store: exports.store
    } },
    react_1.default.createElement(_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map