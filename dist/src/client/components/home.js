"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class Home extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }
    componentDidMount() {
        UserService.getPublicContent().then(response => {
            this.setState({
                content: response.data
            });
        }, error => {
            this.setState({
                content: (error.response && error.response.data) ||
                    error.message ||
                    error.toString()
            });
        });
    }
    render() {
        return (react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("header", { className: "jumbotron" },
                react_1.default.createElement("h3", null, this.state.content))));
    }
}
exports.default = Home;
//# sourceMappingURL=home.js.map