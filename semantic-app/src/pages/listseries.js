import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
const axios = require('axios').default;

//Page for choosing your profile and your db for the series

class ListSeries extends Component {

  constructor(props) {
    super(props);
    this.state = {db: ''};
    this.state = {name: 'user'};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDb = this.handleChangeDb.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeGender(event) {
    this.setState({gender: event});
  }
  handleChangeDb(event) {
    this.setState({db: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3030/lireserie',
      data: {
        name: this.state.name,
        db: this.state.db
      }
    }).then((response) => {
      this.handleChangeGender(response.data);
    });
  }

render() {

    return (
        <div className='list'>
          <Link className="link" to="/">Menu</Link>
          <h5 className='advertise'>! Do not forget to create an account !</h5>
          <h1>Choose your database</h1>
          <form className='textoption' onSubmit={this.handleSubmit}>
            <label>
              Name: <input type="text" name='name' value={this.state.name} onChange={this.handleChangeName} />
            </label><br/>
            Database: <select value={this.state.db} onChange={this.handleChangeDb}>
              <option selected value="Empty">Empty</option>
              <option value="DBpedia">DBpedia</option>
              <option value="Wikidata">Wikidata</option>
            </select> <br/>
            <input className='button' type="submit" value="Submit" /><br/>
            <a className="link" href={"/list/infos/"+ this.state.db + "/series/" + this.state.gender}>See your series</a><br/>
          </form>
        </div>
    );
  }
}

export default ListSeries;