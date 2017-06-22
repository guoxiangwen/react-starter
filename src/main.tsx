import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './main.less';



import App from './components/app';

import NotFound from './components/404';


/** 
 * 定义路由配置
 */

const ROUTER_CONFIG = [{
        path: '/',
        component: App
    },
    {
        path: '*',
        component: NotFound //404
    },
];
ReactDOM.render(( <Router history = { browserHistory }
    routes = { ROUTER_CONFIG }
    />
), document.getElementById('app'));