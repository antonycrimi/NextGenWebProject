import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';


class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {film: ''};
    this.state = {series: ''};
    this.state = {name: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSeries = this.handleChangeSeries.bind(this);
    this.handleChangeFilm = this.handleChangeFilm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeSeries(event) {
    this.setState({series: event.target.value});
  }
  handleChangeFilm(event) {
    this.setState({film: event.target.value});
  }

  handleSubmit(event) {
    alert('Name: ' + this.state.name + ' - Series: ' + this.state.series  + ' - Film: ' + this.state.film);
    event.preventDefault();
  }

render() {

    return (
        <div>
          <Link to="/">Clique pour retourner au menu</Link>
          <h1>Create your account</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name: <input type="text" name='name' value={this.state.name} onChange={this.handleChangeName} />
            </label><br/>
            Series gender: <select value={this.state.series} onChange={this.handleChangeSeries}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select> <br/>
            Film gender: <select value={this.state.film} onChange={this.handleChangeFilm}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select> <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default Create;