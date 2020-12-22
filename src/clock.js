import { Component } from "react";
import { css, ThemeProvider } from '@emotion/react';
import Themes from "./themes.js";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().getTime()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date().getTime()
        });
    }

    getDate(localTime, destinationOffset) {
        const localOffset = new Date(localTime).getTimezoneOffset() * 60000,
            utc = localTime + localOffset,
            utcDate = new Date(utc),
            destinationDate = new Date(utc + (3600000 * destinationOffset));
        return {
            utcDate,
            destinationDate
        };
    }

    render() {
        const {
            utcDate,
            destinationDate
        } = this.getDate(this.state.time, this.props.utcOffset),
            currentTheme = Themes()[this.props.theme];

        return (
            <ThemeProvider theme={currentTheme}>
                <div css={theme => ({
                    color: theme.colors.textPrimary,
                    backgroundColor: theme.colors.bgPrimary,
                    margin: theme.spacing.margin,
                    padding: theme.spacing.padding,
                    border: `6px solid ${theme.colors.borderColor}`,
                    borderRadius: '10px'
                })}>
                    <h2><span css={css`opacity:.5`}>Hello</span> {this.props.city} <span css={css`font-family: "Lucida" Grande, sans-serif; opacity:.5; margin-left: 10px; transform: rotate(90deg); display: inline-block;`}>:)</span></h2>
                    <h3>{`Local time is ${destinationDate.toLocaleTimeString()}`}</h3>
                    <h4>{`UTC time is ${utcDate.toLocaleTimeString()}`}</h4>
                </div>
            </ThemeProvider>
        );
    }
}

export default Clock;