import React, { Component } from 'react';

class App extends React.Component {
    render() {
        console.log(this.props.data);
        console.log(this.props.title);
        console.log(this.props.headings);
        return (
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {
                                this.props.headings.map((headings, i) => {
                                    return <th key={i}>{headings}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((row, i) => {
                                return <tr key={i}>
                                    <td>{row.when}</td>
                                    <td>{row.who}</td>
                                    <td>{row.description}</td>

                                </tr>
                    
                            })
                        }
                    </tbody>
                </table>
            </div>
        )

    }
}

export default App;