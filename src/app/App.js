import React, { Component } from 'react';

class App extends React.Component {
    render() {
        console.log(this.props.data);
        console.log(this.props.title);
        console.log(this.props.headings);
        return <h1>Bienvenido!</h1>

    }
}

export default App;