import React, { Component } from 'react';

import Heading from './Heading';
import Row from './Row';

class Headings extends Component {
    render() {
        return (
            <thead>
                <tr>
                    {
                        this.props.headings.map((headings, i) => {
                            return <Heading key={i} headings={headings}/>
                        })
                    }
                </tr>
            </thead>
        )
    }
}

class Rows extends Component {
    render() {
        return (
            <tbody>
            {
                this.props.data.map((row, i) => {
                    return <Row key={i} change={row} />        
                })
            }
            </tbody>
        )
    }
}

class App extends React.Component {
    render() {
        console.log(this.props.data);
        console.log(this.props.title);
        console.log(this.props.headings);
        return (
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">
                    <Headings headings={this.props.headings} />
                    <Rows data={this.props.data} />
                </table>
            </div>
        )

    }
}

export default App;