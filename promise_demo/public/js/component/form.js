import React from 'react';
import $ from "jquery"


export default class Form extends React.Component {

    submitForm(e) {
        e.preventDefault();
        let submitData = $("#form").serializeArray();
        this.props.submitForm(submitData);
    }


    render() {
        return <div>
            <form id="form" onSubmit={this.submitForm.bind(this)}>
                <input type="input" placeholder="name" name="name"/><br/>
                <input type="input" placeholder='email' name="email"/><br/>
                <input type="input" placeholder='phone' name="phone"/><br/>
                <input type="submit" value="submit"/>
            </form>
            <div>
                <p>your name is: </p>
            {this.props.userInfo.name}
            </div>
        </div>
    }
}