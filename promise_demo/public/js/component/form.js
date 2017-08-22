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
                <input type="input" placeholder="name" name="name"/>
                <input type="input" placeholder='email' name="email"/>
                <input type="input" placeholder='phone' name="phone"/>
                <input type="submit" value="submit"/>
            </form>
            {/*<div>*/}
            {/*{this.props.userInfo}*/}
            {/*</div>*/}
        </div>
    }
}