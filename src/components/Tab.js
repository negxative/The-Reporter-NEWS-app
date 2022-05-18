import React from 'react';
import { Link } from 'react-router-dom';


class Tab extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (<>      
                         <h2 align="center" className='my-4'>News Nation-Top Headlines</h2>
           
                    <div  style={this.props.cols===0?{position:"sticky",top:"0px ",minWidth:"100%",zIndex:"2",backdropFilter:"blur(5px)"}:{position:"sticky",top:"0px ",minWidth:"100%",zIndex:"2",background:"#1f1e1f"}} >
                    <b style={{fontWeight:"500"}}> 
                          <ul className="nav justify-content-center">
                         
                            <li className="nav-item">
                                <Link style={this.props.cols!=0?{color:"#f57a89"}:{color:"#a80215"}} className="nav-link active" aria-current="page" to="/">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={this.props.cols!==0?{color:"#f57a89"}:{color:"#a80215"}} className="nav-link" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={this.props.cols!==0?{color:"#f57a89"}:{color:"#a80215"}} className="nav-link "to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={this.props.cols!==0?{color:"#f57a89"}:{color:"#a80215"}} className="nav-link " to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={this.props.cols!==0?{color:"#f57a89"}:{color:"#a80215"}} className="nav-link "  to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={this.props.cols!==0?{color:"#f57a89"}:{color:"#a80215"}} className="nav-link " to="/Entertainment">Entertainment</Link>
                            </li>
                            
                    </ul>
                    </b>
                </div>
        </>
        );
    }
}

export default Tab;