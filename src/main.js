import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import './main.less';


class Main extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

Main.propTypes = {

};

render(
    <Main/>,
    document.getElementById('app')
)