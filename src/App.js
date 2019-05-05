// App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create';
import Index from './components/Index';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import IndexDetail from './components/IndexDetail';
class App extends Component {
state = {
    todos : '',
    title: ''
  }
  
  onSearch = (title)=>{
    this.setState({title: title});
}

    render() {
        
        return (
            <Router>
              <div>
                <Navbar onSearch={this.onSearch}/>
                <div className="container">
                  
                    <br/>
                    <Switch>
                        <Route exact path='/create' component={Create}/>
                        
                        <Route exact path='/' render={routeProps => <Index {...routeProps} title={this.state.title}/>} />
                       <Route path='/Index' render={routeProps => <Index {...routeProps} title={this.state.title}/>} />
                    
                        <Route path='/indexDetail/:id' component={IndexDetail} />
   
                    </Switch>

                    </div>
                    <Footer/>
                
                </div>

            </Router>

        );
    }
}

export default App;