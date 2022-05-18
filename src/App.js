import './App.css';   
import React from 'react';
import Nav from './components/Nav';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Tab from './components/Tab';
import About from './components/About';
import Contact from './components/Contact';


class App extends React.Component {
  
  constructor(props){
    super(props);
      this.state={
        dm:0,
        mode:"Dark"
      }
  }

  darkmode=()=>{
    if(this.state.dm===0){
      this.setState({
            dm:1,
            mode:"Light"
        })
        document.body.style.background="#1f1e1f";
        document.body.style.color="white";
      document.querySelector(".navbar-brand").classList.add("black");
      document.querySelectorAll(".nav-link").forEach(e=>{
        e.classList.add("black");
      })
      document.getElementById("dr").setAttribute("class","btn btn-light my-3")
    }
    else{
      this.setState({
        dm:0,
        mode:"Dark"
      })
      document.body.style.background=" linear-gradient(to bottom, rgb(173, 197, 255) 0%, rgb(135, 195, 255) 100%)";
      document.body.style.color="#1f1e1f";
      document.getElementById("dr").setAttribute("class","btn btn-dark my-3")
      document.querySelector(".navbar-brand").classList.remove("black");
      document.querySelectorAll(".nav-link").forEach(e=>{
        e.classList.remove("black");
      })
    }
  }
   
  style={
    position:"fixed",
    bottom:"30px",
    right:"50px",
    color:"white",
    zIndex:"2"
  }
  top=()=>{
    document.documentElement.scrollTop = 0;
  }
  apiK=process.env.REACT_APP_APIKEY;

  render() {
    return <div>
        <Router>
            <Nav/>
            
            <div className="d-flex flex-column bd-highlight my-3" style={this.style}>
            <button type="button" className="btn btn-dark my-3"  id="dr" onClick={this.darkmode}>{this.state.mode + " Mode"}</button>
            <button type="button" className="btn btn-info" onClick={this.top} style={{background:"#ebebeb",color:"black"}}>TOP</button>
            </div>
            <div style={this.style}>
            </div>
            
            <Routes>
                    <Route path="/about" element={ <About/> }></Route>
                    <Route path="/contact" element={ <Contact/> }></Route>
                <Route  path="/" element={<><Tab cols={this.state.dm}/><News key="general"  cols={this.state.dm} api={this.apiK} cat="general"/></>}></Route>
                <Route  path="/Health" element={<><Tab cols={this.state.dm}/><News key="health" cols={this.state.dm} api={this.apiK} cat="health"/></>}></Route>
                <Route  path="/Business" element={<><Tab cols={this.state.dm}/><News key="business" cols={this.state.dm} api={this.apiK} cat="business"  /></>}></Route>
                <Route  path="/Science" element={<><Tab cols={this.state.dm}/><News cols={this.state.dm} api={this.apiK} cat="science"/></>}></Route>
                <Route  path="/Sports" element={<><Tab cols={this.state.dm}/><News key="sports" cols={this.state.dm} api={this.apiK} cat="sports"/></>}></Route>
                <Route  path="/Entertainment" element={<><Tab cols={this.state.dm}/><News key="entertainment" cols={this.state.dm} api={this.apiK} cat="entertainment"/></>}></Route>
            </Routes>
        </Router>
    </div>;
  }
}

export default App;

