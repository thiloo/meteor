import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
    render() {
        // console.log(this.props.bin.content);
        const rawHTML = markdown.toHTML(this.props.bin.content);
        // console.log(typeof rawHTML);

        return (
            <div className="col-xs-4">
                <h5>Output</h5>
                <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
            </div>
        );
    }
}

export default BinsViewer;
