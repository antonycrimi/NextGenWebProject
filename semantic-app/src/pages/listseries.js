import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
const axios = require('axios').default;


class ListSeries extends Component {

  constructor(props) {
    super(props);
    this.state = {db: ''};
    this.state = {name: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDb = this.handleChangeDb.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeDb(event) {
    this.setState({db: event.target.value});
  }

  handleSubmit(event) {
    alert('Name: ' + this.state.name + ' - Db: ' + this.state.db);
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3030/lireserie',
      data: {
        name: this.state.name,
        db: this.state.db
      }
    }).then(function (response) {
      console.log(response);
    });
  }

render() {

    return (
        <div>
          <Link to="/">Click to go back to the menu</Link>
          <h1>Choose your database</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name: <input type="text" name='name' value={this.state.name} onChange={this.handleChangeName} />
            </label><br/>
            Database: <select value={this.state.db} onChange={this.handleChangeDb}>
              <option value="DBpedia">DBpedia</option>
              <option value="Wikidata">Wikidata</option>
            </select> <br/>
            <input type="submit" value="Submit" /><br/>
            <a href={"/list/infos/"+ this.state.db + "/series/" + "sf"}>See your series</a><br/>
          </form>
        </div>
    );
  }
}

export default ListSeries;