// import React, { Component } from 'react';
import logo from '@/imgs/logo.svg';
import './app.less';
import List from './list';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app-container">
                <header>
                    <img src={logo} alt="logo" className="app-logo" />
                    <h2>React Starter</h2>
                    <p>react,es6,babel,webpack2,react-router,jest</p>
                </header>
                <main>
                    <List />
                </main>
                <footer></footer>
            </div>
        );
    }
}


App.propTypes = {

};

export default App
