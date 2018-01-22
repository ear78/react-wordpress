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
        this.setState({
            toggleMovies: true
        })
    }

    render(){
        return (
                <div>
                    <h1>
                        <img className="React-logo" src={logo} alt="React Logo" />
                        React <span className="And">And</span>Wordpress <img className="Wp-logo" src={wplogo} alt="Wordpress Logo" />
                    </h1>
                    <div className="Line"></div>
                    <Button click={this.showMoviesHandler}/>
                    {this.state.toggleMovies ? <Movie /> : null}
                </div>
        )
    }
};

export default Movies;
