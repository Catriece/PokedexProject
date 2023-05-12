//import { useState } from "react";
import logo from '../logo.svg';

function HomePage(props) {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form >
            <label htmlFor="searchBar">
                <input type="text" id="searchBar" />
            </label>
            <button>Pokemon GO!</button>
          </form>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
}

export default HomePage;