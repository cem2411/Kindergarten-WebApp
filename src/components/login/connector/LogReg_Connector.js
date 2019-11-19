import React, { Component } from "react";
import "./style.scss";
import { Login } from "../Login";
import { Register } from "../Register";


export default class LogReg_Connector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginActive: true
    };
  }
  

  changeState() {
    const { LoginActive } = this.state;
    if (LoginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ LoginActive: !prevState.LoginActive }));
  }

  render() {
    const { LoginActive } = this.state;
    const current = LoginActive ? "Registrierung":"Login";
    const currentActive = LoginActive ? "login":"registrierung";

    return (
      <div className="main">
        <div className="log">
          <div className="container">
            {LoginActive && <Login container={ref => (this.current = ref)} />}
            {!LoginActive && (
              <Register container={ref => (this.current = ref)} />
            )}
          </div>
          <CurrentState
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const CurrentState = props => {
  return (
    <div
      className="current-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner.container">
        <div className="text">{props.current}</div>>
      </div>
    </div>
  );
};
