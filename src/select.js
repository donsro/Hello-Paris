import { Component } from "react";

class SelectTheme extends Component {
    render() {
        return (
            <div>
                <label className="text-muted">{this.props.label}</label>
                <select
                    value={this.props.selectedValue}
                    onChange={e => this.props.onChange(this.props.value, e)}
                    className="form-select"
                    aria-label="Default select example">
                    <option value="themeA">Light Sky Blue</option>
                    <option value="themeB">Bisque</option>
                    <option value="themeC">Indigo</option>
                </select>
            </div>
        );
    }
}

export default SelectTheme;