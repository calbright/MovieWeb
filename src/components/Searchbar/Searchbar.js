import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions';
import Movie from '../Movie/Movie';

class Searchbar extends React.Component{
    state = {
        title: ''
    }

    formHandler = (event) => {
        event.preventDefault();
        this.props.fetchMovie(this.state.title);
        this.setState({title: ''});
    }

    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.formHandler}>
                        <input 
                            type="text" 
                            placeholder="Title" 
                            onChange={e => this.setState({title: e.target.value})}
                            value={this.state.title}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <Movie movie={this.props.movie}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { movie: state.movie }
}

export default connect(mapStateToProps, { fetchMovie })(Searchbar)