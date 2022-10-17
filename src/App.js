import { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Navitem from "./components/navitems";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?q=Apple&apiKey=e4b8893c12734f37afb2482aaaa12146";
    const data = await fetch(url);
    const results = await data.json();
    console.log(results.articles);
    this.setState({ articles: results.articles });
  }
  render() {
    return (
      <>
        <Navbar />
        <h2 className="text-center mt-2 mb-2">Welcome To The News App</h2>
        <div className="container mt-1 p-1">
          <div className="row">
            {this.state.articles.map((article) => {
              return (
                <div className="col-sm m-1" key={article.url}>
                  <Navitem 
                  author={article.author}
                  title={article.title} 
                  description={article.description.slice(0, 100)}
                  url={article.url}
                  imgUrl={article.urlToImage}
                  publishedAt={article.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
