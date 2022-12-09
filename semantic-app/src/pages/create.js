import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

const axios = require('axios').default;


class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {filmdb: ''};
    this.state = {seriesdb: ''};
    this.state = {filmdb: ''};
    this.state = {seriesdb: ''};
    this.state = {name: 'user'};

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
    axios({
      method: 'post',
      url: 'http://localhost:3030/ecrire',
      data: {
        info: "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" + '\n' + ":PersonalInfo      rdf:type  :person" + '\n' + ":PersonalInfo      :name    :"+ this.state.name + '\n' + ":FilmInfo     :gender  :"+ this.state.filmdb + '\n' + ":FilmInfo      :gender  :" + this.state.filmwiki + '\n' + ":SeriesInfo     :gender  :"+ this.state.seriesdb + '\n' + ":SeriesInfo      :gender  :" + this.state.serieswiki + '\n',
        name: this.state.name
      }
    });
   }
  

render() {

    return (
        <div>
          <Link className="link" to="/">Menu</Link>
          <h1>Create your account</h1>
          <form className='textoption' onSubmit={this.handleSubmit}>
            <label>
              Name: <input type="text" name='name' value={this.state.name} onChange={this.handleChangeName} />
            </label><br/>
            Series gender for DBpedia: <select value={this.state.seriesdb} onChange={this.handleChangeSeriesDb}>
              <option selected value="Empty">Empty</option>
              <option value="Cringe_comedy">Cringe comedy</option>
              <option value="Epic_fantasy">Epic Fantay</option>
              <option value="Animated_sitcom">Animated</option>
              <option value="Political_thriller">Political Thriller</option>
            </select> <br/>
            Film gender for DBpedia: <select value={this.state.filmdb} onChange={this.handleChangeFilmDb}>
              <option selected value="Empty">Empty</option>
              <option value="Adventure_film">Adventure</option>
              <option value="Romantic_comedy">Commedy romantic</option>
              <option value="Supernatural_horror_film">Horror</option>
              <option value="Documentary_film">Documentary</option>
            </select> <br/>
            Series gender for Wikidata: <select value={this.state.serieswiki} onChange={this.handleChangeSeriesWiki}>
              <option selected value="Empty">Empty</option>
              <option value="wd:Q7696995">Comedy</option>
              <option value="wd:Q1366112">Dramatic</option>
              <option value="wd:Q581714">Animated</option>
              <option value="wd:Q336059">Science fiction</option>
            </select> <br/>
            Film gender for Wikidata: <select value={this.state.filmwiki} onChange={this.handleChangeFilmWiki}>
              <option selected value="Empty">Empty</option>
              <option value="wd:Q319221">Adventure</option>
              <option value="wd:Q157443">Commedy</option>
              <option value="wd:Q200092">Horror</option>
              <option value="wd:Q188473">Action</option>
            </select> <br/>
            <input  className='button' type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default Create;