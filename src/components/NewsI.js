import React from 'react';
import "../App.css"




class NewsI extends React.Component {
    
    render() {
        let {pub,title,desc,iurl,linki}=this.props;
       
        return( 
        <>
           <div className="card" >
                <img src={iurl?iurl:"https://c.ndtvimg.com/2022-02/or0q48l8_imphal-manipur_625x300_02_February_22.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div> 
                            <a href={linki?linki:"https://c.ndtvimg.com/2022-02/or0q48l8_imphal-manipur_625x300_02_February_22.jpg"} style={this.props.rols===0?{background:"#141414",color:"#f7f7f7"}:{background:"#f7f7f7",color:"#141414"} } className="btn btn-primary">Expand</a>
                        </div>
                        <div>
                        -{pub?pub:"Anonymous"}
                        </div>
                    </div>
                </div>
                </div>
        </>
        );
    }
}

export default NewsI;