import React, { Component } from 'react';

class Heading extends Component {   
    render() {
        return <th>{this.props.headings}</th>
    }
}

export default Heading;
