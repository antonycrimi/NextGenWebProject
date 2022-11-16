import './style/App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './pages/list';
import Layout from './pages/layout';
import Infos from './pages/infos';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Find your film or series</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/list" element={<List />} />
            <Route path="/list/infos/:gender" element={<Infos />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
