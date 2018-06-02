import * as React from 'react';
import * as ReactDom from 'react-dom';

import img from "./../../static/image/naturali.png";
import "./../style/index.scss";

class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleClick(){
        console.log('Hello!');
    }

    render() {
        return (
            <div className='main'>
                <img src={ img } />
                <h1 className="title">desktop example</h1>
            </div>
        );
    }
}

ReactDom.render(<Home />, document.getElementById('home'));
