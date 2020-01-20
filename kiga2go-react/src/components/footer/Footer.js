import React, { Component } from "react";
import "./style.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer id="footer" className="py-4 text-white-100">
          <div className="footer__content">
            <label htmlFor="sticky-footer">&copy; 2019 Cem Gueclue</label>
          </div>
        </footer>
      </div>
    );
  }
}
