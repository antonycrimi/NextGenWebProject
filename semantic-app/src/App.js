import './style/App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import List from './pages/list';
import Layout from './pages/layout';
import Infos from './pages/infos';
import Create from './pages/create';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Find your film or series</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/create" element={<Create />}/>
        <Route path="/list" element={<List />} />
          <Route path="/list/infos/:gender" element={<Infos />} />
      </Routes>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
