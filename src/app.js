import { Component } from "react";
import { css, Global } from '@emotion/react';
import Clock from "./clock.js";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            themeParis: "themeA",
            themeLondon: "themeA",
            themeNewYork: "themeA"
        };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    handleThemeChange(stateProp) {
        this.setState(state => {
            let changedStateValue = state[stateProp] === "themeA" ? "themeB" : "themeA";
            return { [stateProp]: changedStateValue };
        });
    }

    render() {
        return (
            <div className="container">
                <Global
                    styles={{
                        body: {
                            margin: '2em 0',
                            padding: 0,
                            backgroundColor: `${this.state.isToggleOn ? 'Gainsboro' : 'LavenderBlush'}`
                        }
                    }}
                />

                <h1 css={css`color: ${this.state.isToggleOn ? 'LavenderBlush' : 'Gainsboro'}`}>Hello World!</h1>
                
                <div className="row">
                    <div className="col">
                        <Clock city="Paris" utcOffset={1} theme={this.state.themeParis} />
                    </div>
                    <div className="col">
                        <Clock city="London" utcOffset={0} theme={this.state.themeLondon} />
                    </div>
                    <div className="col">
                        <Clock city="New York" utcOffset={-5} theme={this.state.themeNewYork} />
                    </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">                    
                    <button className="btn btn-light mx-sm-1" onClick={() => this.handleThemeChange("themeParis")}>
                        Toggle Paris theme
                    </button>
                    <button className="btn btn-light mx-sm-1" onClick={() => this.handleThemeChange("themeLondon")}>
                        Toggle London theme
                    </button>
                    <button className="btn btn-light mx-sm-1" onClick={() => this.handleThemeChange("themeNewYork")}>
                        Toggle New York theme
                    </button>
                    <button className="btn btn-light mx-sm-1" onClick={this.handleClick}>
                        Toggle Background {this.state.isToggleOn ? 'ON' : 'OFF'}
                    </button>
                </div>
            </div>
        );
    }
}

export default App;