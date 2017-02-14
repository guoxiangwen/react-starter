import React, { Component } from 'react';
import logo from './../imgs/logo.svg';
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
                    <p>react,es6,babel,webpack2,less,jest</p>
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
        { id: 2, href: 'https://www.awesomes.cn/repo/facebook/react', src: './../imgs/es6.jpg', title: 'es6', desc: 'Facebook 推出的一款声明式的，高效的，灵活的用于创建用户接口的JavaScript 库' },
        { id: 3, href: 'https://www.awesomes.cn/repo/facebook/react', src: './../imgs/babel.jpg', title: 'babel', desc: 'Facebook 推出的一款声明式的，高效的，灵活的用于创建用户接口的JavaScript 库' },
        { id: 4, href: 'https://www.awesomes.cn/repo/facebook/react', src: './../imgs/less.jpg', title: 'less', desc: 'Facebook 推出的一款声明式的，高效的，灵活的用于创建用户接口的JavaScript 库' },
        { id: 5, href: 'https://www.awesomes.cn/repo/facebook/react', src: './../imgs/webpack.jpg', title: 'webpack', desc: 'Facebook 推出的一款声明式的，高效的，灵活的用于创建用户接口的JavaScript 库' },
        { id: 6, href: 'https://www.awesomes.cn/repo/facebook/react', src: './../imgs/jest.svg', title: 'jest', desc: 'Facebook 推出的一款声明式的，高效的，灵活的用于创建用户接口的JavaScript 库' },

        ];
        return (
            <div>
                {
                    lists.map((item) => {
                        return (
                            <section>
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
