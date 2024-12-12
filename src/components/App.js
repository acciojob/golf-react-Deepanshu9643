import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false, // Whether the ball is rendered or not
            posi: 0,            // Position of the ball
            ballPosition: { left: "0px" } // The ball's position in the style
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this); // Binding the keydown event handler
    };

    // Button click handler to show the ball and hide the button
    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    // Render the button or the ball based on renderBall state
    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    // Handle the right arrow key press to move the ball
    handleKeyDown(event) {
        if (event.key === "ArrowRight") {
            // Move the ball 5px to the right
            this.setState((prevState) => ({
                posi: prevState.posi + 5,
                ballPosition: { left: `${prevState.posi + 5}px` } // Update position
            }));
        }
    }

    // Add keydown event listener on component mount
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    // Clean up the event listener on component unmount
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;

