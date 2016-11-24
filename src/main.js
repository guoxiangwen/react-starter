import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "我是父组件",
            subText: "我是子组件",
            otherSubText: "我是另一个子组件"
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }



    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    handleTextChange() {
        this.setState({
            text: "我是父元素(被Child改变了状态)",
            subText: "我是子元素(我自己修改了父组件的状态)",
            otherSubText: "我是另一个子元素(我被Child组件通过修改父组件改变了我自己)"
        })
    }
    handleOtherTextChange() {
        this.setState({
            text: "我是父元素(被OtherChild改变了状态)",
            subText: "我是子元素(我被OtherChild修改了父组件的状态)",
            otherSubText: "我是另一个子元素(我自己通过修改父组件改变了我自己)"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <Child textOnChange={this.handleTextChange.bind(this)} text={this.state.subText} />
                <OtherChild otherTextChange={this.handleOtherTextChange.bind(this)} text={this.state.otherSubText} />
            </div>
        );
    }
}

class Child extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    //改变父元素的state
    handleClick() {

    }
    componentWillReceiveProps(nextProps) {
        console.log("Child的props即将改变:", nextProps)
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Child组件更新:", nextState)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        return (
            <div onClick={this.props.textOnChange}>
                {this.props.text}
            </div>
        );
    }
}

class OtherChild extends Component {
    render() {
        return (
            <div onClick={this.props.otherTextChange}>
                {this.props.text}
            </div>
        );
    }
}

OtherChild.propTypes = {
    text: React.PropTypes.string
};
Child.propTypes = {
    text: React.PropTypes.string
};

render(
    <Parent />,
    document.getElementById('app')
)