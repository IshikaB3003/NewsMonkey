import { element } from 'prop-types';
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

// articles=[
//     {
//         "source": { "id": "bleacher-report", "name": "Bleacher Report" },
//         "author": null,
//         "title": "☄️ EMBIID-TATUM ANIME FIGHT☄️",
//         "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
//         "url": "https://bleacherreport.com/videos/259156-joel-embiid-vs-jayson-tatum-epic-battle-hero-ball-episode-1",
//         "urlToImage": null,
//         "publishedAt": "2022-10-18T11:22:19.7782297Z",
//         "content": "EMBIID VS. TATUM IN EPIC FIGHT The battle for the face of the league begins. Hero Ball premieres NOW"
//       },
//       {
//         "source": { "id": "bleacher-report", "name": "Bleacher Report" },
//         "author": null,
//         "title": " Stefon Diggs Interview ",
//         "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
//         "url": "https://bleacherreport.com/videos/255535-von-miller-x-stefon-diggs",
//         "urlToImage": null,
//         "publishedAt": "2022-10-13T16:37:36.6975172Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "the-washington-times",
//           "name": "The Washington Times"
//         },
//         "author": "The Washington Times https://www.washingtontimes.com",
//         "title": "Latest Quizzes",
//         "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
//         "url": "https://www.washingtontimes.com/quiz/",
//         "urlToImage": null,
//         "publishedAt": "2022-08-30T16:37:43.8583104Z",
//         "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
//       },
//       {
//         "source": { "id": "usa-today", "name": "USA Today" },
//         "author": null,
//         "title": "Daily Briefing",
//         "description": "The day's top stories, from sports to movies to politics to world events.",
//         "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
//         "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
//         "publishedAt": "2021-08-15T15:35:07+00:00",
//         "content": "The day's top stories, from sports to movies to politics to world events."
//       }
//     ]


    static defaultProps={
      country:'us',
      pageSize:8,
      category: 'general',
    }
    
    static propTypes={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }
  
  
    constructor(){
        super();
        this.state={
            // articles:this.articles,
            articles:[],
            loading:false,
            page:1,

        }
    }

    async updateNews(){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0046f61e768945c49b19651c3784cf82&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
        totalArticles: parsedData.totalResults,
        loading:false
    })
  }

    async componentDidMount(){
      console.log("cdm");
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0046f61e768945c49b19651c3784cf82&page=1&pageSize=${this.props.pageSize}`
    //   this.setState({loading:true});
    //   let data=await fetch(url);
    //   let parsedData=await data.json();
    //   console.log(parsedData);
    //   this.setState({articles: parsedData.articles,
    //     totalArticles: parsedData.totalResults,
    //     loading:false
    // })
      this.updateNews();
    }

     handlePreviousClick=async()=>{
        console.log("prev")

        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0046f61e768945c49b19651c3784cf82&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({
        //   page: this.state.page-1,
        //   articles: parsedData.articles,
        //   loading:false
        // })

        this.setState({page:this.state.page-1});
        this.updateNews();

    }

    

     handleNextClick=async()=>{
        console.log("next");
        // if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
        // }
        // else{
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0046f61e768945c49b19651c3784cf82&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({
        //   page: this.state.page+1,
        //   articles: parsedData.articles,
        //   loading:false
        // })
      //}  
      this.setState({page:this.state.page+1});
      this.updateNews();

    }
    
    

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.setState.loading && this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disables={this.state.page<=1} type="button" className="btn btn-light" onClick={this.handlePreviousClick}>&#8592;Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>
        </div>
      </div>
    )
  }
}


