import React from 'react';

class Movie extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount(){
        let dataURL = "http://localhost:8888/wordpresstest/wp-json/wp/v2/movies?_embed";
        fetch(dataURL)
          .then((res) => res.json())
          .then(res => {
            this.setState({
              movies: res
            })
          })
          .catch(err => {
              console.log('this has been an error of the national broadcast system');
          })
    }

    render(){
        let movies = this.state.movies.map((movie, index) => {
            return <div className="Max-width" key={index}>
                        <img src={movie._embedded['wp:featuredmedia'][0].source_url} />
                      <p className="Small-titles"><strong className="Strong">Title:</strong> {movie.title.rendered}</p>
                      <p className="Small-titles"><strong className="Strong">Release Year:</strong> {movie.acf.release_year}</p>
                      <p className="Small-titles"><strong className="Strong">Rating:</strong> {movie.acf.rating}</p>
                      <div className="Margin-bottom Description"><strong className="Strong">Description:</strong><div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
                   </div>
        });
        return(
            <div>
                {movies}
            </div>
        )
    }
}

export default Movie;
