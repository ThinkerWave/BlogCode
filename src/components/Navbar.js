// App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import '../css/Navbar.css';

class Navbar extends Component {

    onChange =(e)=> {
        var value = e.target.value;
        this.props.onSearch(value)
    }
    state = {
        SearchForTitle : ''
    };
    render() {
        return (
            <nav class="navbar navbar-expand ">
                <div class="navbar-collapse collapse w-80 order-1 order-md-0 dual-collapse2">

                    <div className="nav navbar-nav">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to={'/create'} className="nav-link">쓰기</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/index'} className="nav-link">목록</Link>
                            </li>

                        </ul>

                    </div>
                    <div className="main-container">
                        <div className="center">
                            <Link to={'/'} className="nav-link center">
                                <a className="navbar-brand">
                                    <b><h2>소학행</h2></b>
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
                    <div className="main-container-right">
                        <div class="search-box">
                            <input type="text" name="" class="search-txt" placeholder="search..." onChange={this.onChange}/>
                            <a class="search-btn">
                            찾기
                            </a>
                        </div>
                    </div>
           

            </nav>

        );
    }
}

export default Navbar;