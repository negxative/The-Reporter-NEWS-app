import React from 'react';

class Spin extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <center>
           <div className="spinner-grow m-5 " role="status">
            <span className="sr-only m-5"></span>
            </div></center>
        );
    }
}


export default Spin;