import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      loading: true,
      movies: [
        {
          _id: "5b21ca3eeb7f6fbccd471815",
          title: "Terminator",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 6,
          dailyRentalRate: 2.5,
          publishDate: "2018-01-03T19:04:28.809Z"
        },
        {
          _id: "5b21ca3eeb7f6fbccd471816",
          title: "Die Hard",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471817",
          title: "Get Out",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 8,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471819",
          title: "Trip to Italy",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181a",
          title: "Airplane",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181b",
          title: "Wedding Crashers",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181e",
          title: "Gone Girl",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 7,
          dailyRentalRate: 4.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181f",
          title: "The Sixth Sense",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 4,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471821",
          title: "The Avengers",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        }
      ],
    };
  }

  deleteMovie(movie) {
    let movieInDb = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({movies : movieInDb})
    console.log("movieInDb", movieInDb);

  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  reset = () => {
    this.setState({ count: 0 });
  }
  render() {
    setTimeout(() => this.setState({loading : false }),3000);
    return (
      <>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <button className={this.state.count === 0 ? "btn btn-warning" : "btn btn-danger"}>
              {this.state.count}
            </button>
            <button className='btn btn-secondary' onClick={this.incrementCount}>
              Incrément
            </button>
            <button className='btn btn-dark' onClick={this.reset}>
              Reset
            </button>
          </>
        )}
        <table className='table'>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button onClick={() => this.deleteMovie(movie)} className="btn btn-danger">Supprimer</button>
                </td>
              </tr>
            ))};
          </tbody>
        </table>
      </>
    );
  }

}

export default App;
