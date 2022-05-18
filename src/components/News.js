import React from 'react';
import NewsI from './NewsI';
import  Spin from './Spin';
import InfiniteScroll from "react-infinite-scroll-component";


class News extends React.Component {
    constructor(props){
        super(props);
        this.state={
            total:0,
            article:[],
            current:1,
            load:true
        } 
    }
     
    
        async componentDidMount() {
            let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.cat}&apiKey=${this.props.api}&page=${this.state.current}&pageSize=15 `;
            let data= await (await fetch(url)).json();
            console.log(data);
            this.setState({
                article:data.articles,
                total:data.totalResults,
                load:false
            })
        }
         fetchMoreData =async () => {
            this.setState({current:this.state.current+1})
            let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.cat}&apiKey=${this.props.api}&page=${this.state.current}&pageSize=15 `;
            let data= await (await fetch(url)).json();
            console.log(data);
            this.setState({
                article:this.state.article.concat(data.articles),
                total:data.totalResults
            })
          };

    render() { 
        return (
        <>
        <div className="container mb-3">
           {this.state.load && <Spin/> }
           <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.total}
          loader={<Spin/>} >
                <div className="container">
                <div className="row">
                    { this.state.article.map((el)=>{
                                return <div className="col-md-4 my-3 " key={el.url} >
                                <NewsI title={(el.title?el.title.slice(0,30):"")+"..."} rols={this.props.cols} desc={(el.description?el.description.slice(0,90):"")+"..."} iurl={el.urlToImage} linki={el.url} auth={el.author} pub={el.source.name}/>
                            </div>
                            })}
                
                </div>
                </div>
            </InfiniteScroll> 
         </div>
        </>);
    }
} 

export default News;