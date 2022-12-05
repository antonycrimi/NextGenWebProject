import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';


class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {filmdb: ''};
    this.state = {seriesdb: ''};
    this.state = {filmdb: ''};
    this.state = {seriesdb: ''};
    this.state = {name: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSeriesDb = this.handleChangeSeriesDb.bind(this);
    this.handleChangeFilmDb = this.handleChangeFilmDb.bind(this);
    this.handleChangeSeriesWiki = this.handleChangeSeriesWiki.bind(this);
    this.handleChangeFilmWiki = this.handleChangeFilmWiki.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeSeriesDb(event) {
    this.setState({seriesdb: event.target.value});
  }
  handleChangeFilmDb(event) {
    this.setState({filmdb: event.target.value});
  }
  handleChangeSeriesWiki(event) {
    this.setState({serieswiki: event.target.value});
  }
  handleChangeFilmWiki(event) {
    this.setState({filmwiki: event.target.value});
  }

  handleSubmit(event) {
    alert('Name: ' + this.state.name + ' - Series: ' + this.state.seriesdb  + ' - Film: ' + this.state.filmdb +' - Series: ' + this.state.serieswiki  + ' - Film: ' + this.state.filmwiki);
    event.preventDefault();
  }

render() {

    return (
        <div>
          <Link to="/">Click to go back to the menu</Link>
          <h1>Create your account</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name: <input type="text" name='name' value={this.state.name} onChange={this.handleChangeName} />
            </label><br/>
            Series gender for DBpedia: <select value={this.state.seriesdb} onChange={this.handleChangeSeriesDb}>
              <option value="Cringe_comedy">Cringe comedy</option>
              <option value="Epic_fantasy">Epic Fantay</option>
              <option selected value="Animated_sitcom">Animated</option>
              <option value="Political_thriller">Political Thriller</option>
            </select> <br/>
            Film gender for DBpedia: <select value={this.state.filmdb} onChange={this.handleChangeFilmDb}>
              <option value="Adventure_film">Adventure</option>
              <option value="Romantic_comedy">Commedy romantic</option>
              <option selected value="Supernatural_horror_film">Horror</option>
              <option value="Documentary_film">Documentary</option>
            </select> <br/>
            Series gender for Wikidata: <select value={this.state.serieswiki} onChange={this.handleChangeSeriesWiki}>
              <option value="Cringe_comedy">Cringe comedy</option>
              <option value="Epic_fantasy">Epic Fantay</option>
              <option selected value="Animated_sitcom">Animated</option>
              <option value="Political_thriller">Political Thriller</option>
            </select> <br/>
            Film gender for Wikidata: <select value={this.state.filmwiki} onChange={this.handleChangeFilmWiki}>
              <option value="Adventure_film">Adventure</option>
              <option value="Romantic_comedy">Commedy romantic</option>
              <option selected value="Supernatural_horror_film">Horror</option>
              <option value="Documentary_film">Documentary</option>
            </select> <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default Create;