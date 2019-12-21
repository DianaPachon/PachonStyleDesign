import React, {Component} from 'react'
import './Contact.css'
// import {connect} from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import {compose} from 'redux';
// import {createMessage} from '../../store/actions/messageActions';


class Contact extends Component{

    // state={
    //     firstName:'',
    //     lastName:'',
    //     email:'',
    //     mobile:'',
    //     message:'',
    //     createdAt:''
    // }
    // handleChange =(e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value,
    //     })
    //     console.log(this.state);
    // }
    render(){
        return(
        <div className="container">
        <div className="contactBody">
            <h2>Contact Us</h2>
            <div className="row100">
                <form id="inputForm" onSubmit={this.handleSubit}>
                <div className="col">
                    <div className="inputBox">
                        <input id="firstName" type="text" name="" required="required" onChange={this.handleChange}/>
                            <span className="text">First Name</span>
                            <span className="line"></span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input id="lastName" type="text" name="" required="required" onChange={this.handleChange}/>
                            <span className="text">Last Name </span>
                            <span className="line"></span>
                       
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input id="email" type="text" name="" required="required" onChange={this.handleChange}/>
                            <span className="text">Email</span>
                            <span className="line"></span>
                       
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input id="mobile" type="text" name="" required="required" onChange={this.handleChange}/>
                            <span className="text">Mobile</span>
                            <span className="line"></span>
                    </div>
                </div>
                <div className="row100">
                <div className="col">
                    <div className="inputBox textarea">
                        <textarea id="message" required="required" onChange={this.handleChange}></textarea>
                            <span className="text">Type your message here.</span>
                            <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className="row100">
                    <div className="col">
                        <button type="submit"> send</button>
                    </div>
                </div>
             
                </form>
            </div>
             </div>
             
        </div>
        )
}
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         createMessage: (message) => dispatch(createMessage(message))
//     }
// }

export default Contact;