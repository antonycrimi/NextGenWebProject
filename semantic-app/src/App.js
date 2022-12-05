import './style/App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListSeries from './pages/listseries';
import ListFilm from './pages/listfilm';
import Layout from './pages/layout';
import InfosFilmWiki from './pages/infosfilmwiki';
import InfosSeriesWiki from './pages/infosserieswiki';
import InfosFilmDb from './pages/infosfilmdbpedia';
import InfosSeriesDb from './pages/infosseriesdbpedia.js';
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
        <Route path="/listseries" element={<ListSeries />} />
        <Route path="/listfilm" element={<ListFilm />} />
          <Route path="/list/infos/wikidata/film/:gender" element={<InfosFilmWiki />} />
          <Route path="/list/infos/wikidata/series/:gender" element={<InfosSeriesWiki />} />
          <Route path="/list/infos/dbpedia/film/:gender" element={<InfosFilmDb />} />
          <Route path="/list/infos/dbpedia/series/:gender" element={<InfosSeriesDb />} />
      </Routes>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
