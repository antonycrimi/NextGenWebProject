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
import Errrorundefined from './pages/errorundefined';
import Errrorname from './pages/errorname';
import './style/styles.css';

//Router page

class App extends Component {
  render() {
    return (
      <div className='header'>
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
          <Route path="/list/infos/dbpedia/series/undefined" element={<Errrorundefined />} />
          <Route path="/list/infos/dbpedia/film/undefined" element={<Errrorundefined />} />
          <Route path="/list/infos/dbpedia/series/" element={<Errrorname />} />
          <Route path="/list/infos/dbpedia/film/" element={<Errrorname />} />
          <Route path="/list/infos/wikidata/series/undefined" element={<Errrorundefined />} />
          <Route path="/list/infos/wikidata/film/undefined" element={<Errrorundefined />} />
          <Route path="/list/infos/wikidata/series/" element={<Errrorname />} />
          <Route path="/list/infos/wikidata/film/" element={<Errrorname />} />
          <Route path="/list/infos/undefined/series/undefined" element={<Errrorname />} />
          <Route path="/list/infos/undefined/film/undefined" element={<Errrorname />} />
      </Routes>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
