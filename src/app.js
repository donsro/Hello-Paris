import { Component } from "react";
import { css, Global } from '@emotion/react';
import Clock from "./clock.js";
import SelectTheme from "./select.js";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            themeParis: "themeA",
            themeLondon: "themeB",
            themeNewYork: "themeC"
        };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    handleChange(stateProp, event) {        
        this.setState({ [stateProp]: event.target.value });
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

                <button className="btn btn-light float-end" onClick={this.handleClick}>
                    Toggle Background
                </button>

                <h1 css={css`color: ${this.state.isToggleOn ? 'LavenderBlush' : 'Gainsboro'}`}>Hello World!</h1>

                <div className="row row-cols-3">
                    <div className="col">
                        <Clock
                            city="Paris"
                            utcOffset={1}
                            theme={this.state.themeParis} />
                    </div>
                    <div className="col">
                        <Clock
                            city="London"
                            utcOffset={0}
                            theme={this.state.themeLondon} />
                    </div>
                    <div className="col">
                        <Clock
                            city="New York"
                            utcOffset={-5}
                            theme={this.state.themeNewYork} />
                    </div>
                    <div className="col">
                        <SelectTheme
                            label="Paris"
                            value="themeParis"
                            selectedValue={this.state.themeParis}
                            onChange={this.handleChange} />
                    </div>
                    <div className="col">
                        <SelectTheme
                            label="London"
                            value="themeLondon"
                            selectedValue={this.state.themeLondon}
                            onChange={this.handleChange} />
                    </div>
                    <div className="col">
                        <SelectTheme
                            label="New York"
                            value="themeNewYork"
                            selectedValue={this.state.themeNewYork}
                            onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;