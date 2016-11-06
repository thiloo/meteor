import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount() {
        // Render the Blaze accounts form then find the div from render method and insert Blaze accounts form
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container))
    }

    componentWillUnmount() {
        // Go find the forms created and destroy them
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container"></div>
        );
    }
}

export default Accounts;
