import React, { Component } from 'react';
import logo from '@/imgs/logo.svg';
import './app.less';


class App extends Component {
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
class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const lists = [{ id: 1, href: 'https://www.awesomes.cn/repo/facebook/react', src: './../imgs/logo.jpg', title: 'react', desc: 'Facebook 推出的一款声明式的，高效的，灵活的用于创建用户接口的JavaScript 库' },
        { id: 2, href: 'http://es6.ruanyifeng.com/', src: './../imgs/es6.jpg', title: 'es6', desc: 'Babel is a JavaScript compiler.Use next generation JavaScript, today.' },
        { id: 3, href: 'http://babeljs.io/', src: './../imgs/babel.jpg', title: 'babel', desc: 'Babel is a JavaScript compiler.Use next generation JavaScript, today.' },
        { id: 4, href: 'http://webpack.github.io/', src: './../imgs/webpack.jpg', title: 'webpack', desc: '前端MODULE BUNDLER' },
        { id: 5, href: 'http://facebook.github.io/jest/', src: './../imgs/jest.svg', title: 'jest', desc: '🃏 Painless JavaScript Testing' },
        { id: 6, href: 'https://github.com/ReactTraining/react-router', src: './../imgs/jest.svg', title: 'react-router', desc: '基于react的路由' },
        ];
        return (
            <div>
                {
                    lists.map((item) => {
                        return (
                            <section key={item.id}>
                                <a href={item.href} className="app-item" >
                                    {/*<img src={item.src} alt="pic" className="app-item-logo" />*/}
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </a>
                            </section>

                        )

                    })
                }
            </div>



        )
    }
}

App.propTypes = {

};

export default App
