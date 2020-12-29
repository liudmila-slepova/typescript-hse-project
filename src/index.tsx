import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount, route} from 'navi';
import {Router} from 'react-navi';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";

import BlogFeedPage from "./blogs/BlogFeedPage";
import AddPostPage from "./MyPost/AddPostPage";
import MyAccountPage from "./MyAccount/MyAccountPage";


const routes = mount(
    {
        "/": route({
            title: 'Feed',
            view: <BlogFeedPage />
        }),
        "/top": route({
            title: 'App',
            view: <App />
        }),
        "/add": route({
           title: 'Add',
           view: <AddPostPage />
        }),
        "/me": route({
            title: 'My account',
            view: <MyAccountPage />
        }),
        "/login": route({
            title: 'Login',
            view: <LoginPage />
        }),
        "register": route({
            title: 'Register',
            view: <RegisterPage />
        })
    }
)

ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
