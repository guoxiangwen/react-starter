import * as React from "react";
import List from './list';
import './app.less';
// import logo  from './logo.svg';
export interface HelloProps { compiler: string; framework: string }


export class App extends React.Component<null, null>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="app-container">
                <header>
                    <img alt={`logo`} className="app-logo" />
                    <h2>React Starter</h2>
                </header>
                <main>
                    <List />
                </main>
                <footer></footer>
            </div>
        );
    }
}

export default App;
