import React from 'react';
import Movie from './Movie/Movie';
import Button from '../../components/UI/Button/Button';
import logo from '../../logo.svg';
import wplogo from '../../wplogo.svg';
import './Movies.css';

class Movies extends React.Component {
    constructor(){
        super();
        this.state = {
            toggleMovies: false
        }
    }

    showMoviesHandler = () => {
        console.log('fired')
        this.setState({
            toggleMovies: true
        })
    }

    render(){
        const movie = <Movie />
        return (
                <div>
                    <h1>
                        <img className="React-logo" src={logo} alt="React Logo" />
                        React <span className="And">And</span>Wordpress <img className="Wp-logo" src={wplogo} alt="Wordpress Logo" />
                    </h1>
                    <div className="Line"></div>
                    <Button click={this.showMoviesHandler}/>
                    {movie}
                </div>
        )
    }
};

export default Movies;
