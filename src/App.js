import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstState: 'hello wolrd',
            cartCount: 0
        }
    }




    componentDidMount() {
        this.setState({
            firstState: 'welcome to our shop'

        })
    }
    addCount() {
        const newCount = this.state.cartCount + 1;
        this.setState({
            cartCount: newCount
        })
    }

    render() {
        return (


            <div className="container">
                <nav class="navbar navbar-light" style={{ "background-color": "red" }}>
                    {this.state.firstState}
                    <img src="download.png" width="30" height="30" class="d-inline-block align-top" alt="" />

                    <p align="right">
                        <button type="button" className="btn btn-primary ">click {this.state.cartCount}</button>
                    </p>
                </nav>

                <div className="row">
                    <div className="col-3">
                        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="download.png" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p>
                                            <button
                                                className="btn btn-primary add-btn"
                                                onClick={() => {
                                                  
                                                    this.addCount()
                                                }}
                                            >
                                                add
    </button>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="download.png" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p><button type="button" className="btn btn-primary">add</button></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="download.png" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p><button type="button" className="btn btn-primary">add</button></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="download.png" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p><button type="button" className="btn btn-primary">add</button></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="download.png" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p><button type="button" className="btn btn-primary">add</button></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>








        );
    }
}

export default App;
