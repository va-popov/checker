"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStores = void 0;
const mobx_react_1 = require("mobx-react");
const react_1 = require("react");
function useStores() {
    return react_1.default.useContext(mobx_react_1.MobXProviderContext);
}
exports.useStores = useStores;
//# sourceMappingURL=useStore.js.map