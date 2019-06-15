import React from 'react';
import {Redirect} from 'react-router-dom'; 
 
class Login extends React.Component{
    constructor(props){
        super(props);

        this.processForm = this.processForm.bind(this);
    }
    processForm(event){
        event.preventDefault();
        let name = event.target[0].value;
        let password = event.target[1].value;
        if(name === "a"){
            this.props.userStatusChange("saurabh")
            // return <Redirect to='/about'/>
        }
        

        }
    


    render(props){

        // console.log(this.props.match);
        // console.log(this.props.location);
        // console.log(this.props.history);
        return(
            <form onSubmit={this.processForm}>
                <input type="text" placeholder="name"></input>
                <input type="password" placeholder="password"></input>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Login;