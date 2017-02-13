import React, { Component } from 'react';
import logo from './../imgs/logo.svg';
import './app.less';


class App extends Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <img src={logo} alt="logo" className="app-logo" />
                </header>
                <main></main>
                <footer></footer>
            </div>
        );
    }
}

App.propTypes = {

};

export default App
