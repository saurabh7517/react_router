import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Header from "./header";
import Login from "./component/Login";
import PrivateRoute from "./secure/PrivateRoute";
import './header.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:''
        }
        this.setUserState = this.setUserState.bind(this);
    }

    setUserState(name){
        this.setState({
            user:name
        });
    }
    render(props) {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <PrivateRoute path="/about" render={() => {
                        return(<AboutUs user={this.state.user} />)
                    }}/> */}
                    <PrivateRoute path="/about" user = {this.state.user} component = {AboutUs}/>
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/login" render={() => {
                        return(<Login user={this.state.user} userStatusChange={this.setUserState}/>)
                    }}/>
                    <Route  component={ContactUs} />
                </Switch>
                This is a router app</React.Fragment>

            
        )
    }
}

export default App;