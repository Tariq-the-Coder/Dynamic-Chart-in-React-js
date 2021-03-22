import React from 'react'
import ReactToPrint from 'react-to-print';
import Form from './Form';


export class Home extends React.PureComponent {
    render() {
        return (
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">Finacular</a>
                    </div>
                    <div>
                        <a href="https://www.finacular.in/">Sign In</a>
                    </div>
                </header>
                <main>
                    <div className='center'><br />
                        <h1 className="main-heading">ADD Value And Generate PDF Chart</h1>
                    </div>
                    <Form />
                    <div className="center Download">
                        <ReactToPrint
                            trigger={() => <button className='primary'> Download PDF</button>}
                            content={() => this}
                        />
                    </div>
                </main>
                <footer className="row center"> All right reserved</footer>
            </div>
        );
    }
}