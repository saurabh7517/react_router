import React from 'react';
import {Redirect,Route} from 'react-router-dom';
 
class PrivateRoute extends React.Component{
    constructor(props){
        super(props);
    }
    render(props){
        let Component = this.props.component;
        return(
            <Route render={(props) => {
                return this.props.user === "saurabh" ? <Component /> :<Redirect to="/login"/>

                
            }}/>
        )
    }
}

export default PrivateRoute;